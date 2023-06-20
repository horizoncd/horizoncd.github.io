---
title: Custom CI
toc_max_heading_level: 6
---
## How does Horizon CI work

Horizon CI works based on [tekton pipeline](https://github.com/tektoncd/pipeline) and [tekton triggers](https://github.com/tektoncd/triggers). A tekton pipeline will be triggered for an incoming buildDeploy request to perform typical steps, such as compiling and pushing image. Then, the pipeline output that holds artifact image url and other information will be returned to Horizon core by calling back http post request. Horizon CI pipeline includes four steps that is shown below:
![pipeline](/image/pipeline.png)

* Git step: use token to pull source code.
* Compile step: compile and package the source code, such as `mvn clean package`, `go build`, `docker build`, etc.
* Image step: build image from dockerfile to store artifact and push it to registry.
* Deploy step: assemble pipeline output and callback horizon api.

## How to customize your CI

**In order to customize CI, you may prepare two parts of modification.**

### Build config

Build config holds user's build configurations of application or application instance, which is characterized as json object `pipelineJSONBlob` in pipeline.
![](/image/new-app-demo2.png)
You can customize your own build based on [json schema](https://json-schema.org) that contains two parts: json schema and ui schema. Override them in [values.yaml](https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml) of [horizon chart](https://github.com/horizoncd/helm-charts/tree/main/charts/horizon), which has the following structure:

```yaml
build_schema:
  build_json_schema: |
    # your json schema, for example:
    {
      "type": "object",
      "required": [
        "buildType"
      ],
      "properties": {
        "buildType": {
          "type": "string",
          "title": "Build type",
          "oneOf": [
            {
              "enum": [
                "dockerfile"
              ],
              "title": "Dockerfile build"
            }
          ],
          "default": "dockerfile"
        }
      },
      "dependencies": {...}
    }
  build_ui_schema: |
    # your ui schema, for example:
    {
      "ui:order": [
        "buildType",
        "dockerfile",
        "buildArgs"
      ],
      "dockerfile": {
        "content": {
          "ui:widget": "textarea",
          "ui:options": {
            "rows": 18
          }
        }
      },
      "buildType": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": true
        }
      }
    }
```

You can refer to [json schema](https://json-schema.org) and [json schema in horizon template](/docs/reference/template/specification.md#json-schema) for more information.

### Step scripts

The step scripts in [values.yaml](https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml) also can be overridden to perform various pipelines according to user's build config above. The associated file structure is as follows:

```yaml
tektonci-resources:
  horizon:
    script:
      git: |
        # your custom script of git step...
      compile: |
        # your custom script of compile step...
      image: |
        # your custom script of image step...
      deploy: |
        # your custom script of deploy step...
```

The steps can retrieve the following build parameters from horizon core:

| params           | description                            | note                                                            |
| :--------------- | :------------------------------------- | :-------------------------------------------------------------- |
| token            | JWT token used to callback horizon api | usage: add "X-Horizon-JWT-Token: $TOKEN" header to HTTP request |
| application      | application name                       |                                                                 |
| instance          | application instance name                           |                                                                 |
| instanceID        | application instance ID                             |                                                                 |
| environment      | environment name                       |                                                                 |
| gitRepositoryUrl | git repository url of source code      |                                                                 |
| gitSubfolder     | sub folder from context                |                                                                 |
| gitCommit        | git commit of revision                 |                                                                 |
| gitBranch        | git branch of revision                 |                                                                 |
| gitTag           | git tag of revision                    |                                                                 |
| pipelineJSONBlob | json string of build config            | you can parse it by json parser, such as `jq`                 |
| imageURL         | artifact image url                     | the generated artifact image will be push to the url            |
| pipelinerunID    | current pipelinerun ID in horizon core |                                                                 |
| requestID        | current request ID                     |                                                                 |

You can access above parameters by [variable substitutions](https://tekton.dev/docs/pipelines/tasks/#specifying-parameters) in your scripts. For example:

```shell
export TOKEN="$(params.token)"
echo "token: ${TOKEN}"
```

### Configurations

#### Image of step

If your script uses some tools that are not in the **default image**, you can override the images of build step in [values.yaml](https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml). For example:

```yaml
tektonci-resources:
  horizon:
    buildTask: 
      image:
        gitStep: ubuntu:18.04
        compileStep: xxx
        imageStep: xxx
    deployTask:
      image:
        deployStep: xxx
```


#### Git authentication

Pulling user's source code with token or ssh-auth is supported in the **default git step**. You can config git repository tokens and ssh private keys in [values.yaml](https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml). For example:

```yaml
tektonci-resources:
  gitRepos:
    http:
      - url: https://github.com
        token: KL4U5Y6HF14EOJ4IE==
      - url: https://gitlab.com
        token: DS4U5Y6HF54GOE5JF==
    ssh:
      - url: github.com
        privateKey: |
          -----BEGIN OPENSSH PRIVATE KEY-----
          ...
          -----END OPENSSH PRIVATE KEY-----
```

#### Callback in deploy step

You need **callback horizon api** `/apis/internal/v2/clusters/$CLUSTER_ID/deploy` with token to pass back the pipeline output you generate in your **custom deploy step script**. For example:

```shell
curl -k -sSL -X POST \
  -H "Content-Type: application/json" \
  -H "X-Horizon-JWT-Token: $TOKEN" \
  -d "$REQUEST_BODY"
  -o $OUTPUT "$DEPLOY_URL"
```

where the `REQUEST_BODY` is structured as follows:

```json
{
  "output": {
    "image": "harbor.server.org/artifact-image/demo:v1.0",
    ...
  },
  "pipelinerunID": 2435
}
```

The `output` can be used to pass the CI results to CD based on [horizon template](/docs/reference/template/specification.md). For example:

```yaml
# deployment.yaml
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: xxx
        image: {{ .Values.image }}
```

which specifies `output.image` as the container image in deployment template.

#### Volume Mounts

You can configure `extraVolumeMounts` in [values.yaml](https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml) to mount volumes into step container. Volume type `persistentVolumeClaim`, `hostPath` and `emptyDir` (default) is supported. For example:

```yaml
tektonci-resources:
  extraVolumeMounts:
      # persistentVolumeClaim
    - name: persistent-volume
      existingClaim: ci-claim
      mountPath: /persistent_volume
      readOnly: true
      # hostPath
    - name: m2
      hostPath: /root/.m2
      mountPath: /root/.m2
      # emptyDir, if neither persistentVolumeClaim nor hostPath
    - name: maven-repository
      mountPath: /root/.m2
      subPath: repository
      readOnly: false
```
