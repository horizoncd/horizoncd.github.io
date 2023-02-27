---
title: Horizon Template
toc_max_heading_level: 6
---
## What is Horizon Template

Horizon uses a packaging format called `Horizon Template`. You can use the Horizon template to deploy various workloads and achieve best practices through a user-friendly form. This document explains the template format and provides basic guidance for building Horizon templates.

## Prepare

Horizon Templates are based on Helm Charts, Json Schema and React JsonSchema Form, so it is important to have a basic understanding of the following knowledge before proceeding:

* **[Helm Charts](https://helm.sh/docs/topics/charts/)**  
Helm charts contain a series of Kubernetes resources that can be used to deploy various simple or complex applications to a Kubernetes cluster.
* **[Json Schema](https://json-schema.org/)**  
Json Schema is a declarative language that allows you to annotate and validate JSON documents.
* **[React JsonSchema Form](https://github.com/rjsf-team/react-jsonschema-formhttps://json-schema.org/)**  
  React JsonSchema Form is a library that generates user-friendly HTML forms based on Json Schema. The form collects user input, which is used to render the chart and generate the final manifest file for deployment to Kubernetes.

### Why do we choose React JsonSchema Form

The `values.json.schema` specification provided by Helm Chart is mainly for validation, we choose React Json Schema Form mainly because of its stronger form display capabilities. In addition, we applied go template syntax to the json schema file to enhance its flexibility.

## Template Structure

A typical Horizon template is organized as a collection of files that match this:

```
├── Chart.yaml
├── README.md
├── templates
│   ├── _helpers.tpl
│   └── resource.yaml
│── values.yaml
├── schema
│   ├── application.schema.json
│   └── application.ui.schema.json
└── output
    └── outputs.yaml
```

It mainly consists of the following parts:

### Helm Chart

Helm chart includes the following files:

```
├── Chart.yaml
├── README.md
├── templates
│   ├── _helpers.tpl
│   └── resource.yaml
└── values.yaml
```

* **Chart.yaml**  
  A standard Helm Chart file that contains meta-information about the chart, such as the chart name, version, and description.
  

  For example:
  ```
  apiVersion: v2
  name: deployment
  description: A Horizon Template Chart for kubernets
  type: application
  version: 0.0.0
  ```
* **README.md**  
A markdown file that provides documentation and usage instructions for the chart.

  For example:
  ```
  # Template name
  template description
  ## Structure
  structure description
  ```
* **templates**  
A directory contains Go template files that define the Kubernetes resources that will be deployed when the chart is installed. These templates use the values from the `values.yaml` file and the user input from the form to render the final Kubernetes manifest files.
  * **resource.yaml**  
  The main resource manifest file to applyed to Kubernetes, we recommend you to use a unique name for the `name` field, such as `{{ .Values.horizon.cluster }}`, for more built-in parameters, please refer to [GitOps Repository Structure](#gitops-repository-structure).

  In addition to the built-in parameters, you can also customize the parameters through the json schema. We recommend putting your parameters in `.Values.app`.

  For example:
  ```
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: {{ .Values.horizon.cluster }}
  spec:
    replicas: {{ .Values.app.spec.replicas }}
    selector:
    template:
      metadata:
        labels:
        {{- include "podLabels" . | nindent 8 }}
      spec:
        containers:
        - name: {{ .Values.horizon.cluster }}
          image: {{ .Values.image }}
  ```
  * **_helpers.tpl**  
    An optional file that contains Go template functions that can be reused across different yaml files.

    For example:
    ```
    {{- define "podLabels" -}}
    horizoncd.github.io/application: {{ .Values.horizon.application }}
    horizoncd.github.io/cluster: {{ .Values.horizon.cluster }}
    horizoncd.github.io/environment: {{ .Values.env.environment }}
    {{- end }}
    ```

Refer to [Helm Chart documentation](https://helm.sh/docs/topics/charts/) for more information

### Json Schema

The json schema directory format is as follows:

```
└── schema
    ├── application.schema.json
    └── application.ui.schema.json
```

* **application.schema.json**  
application.schema.json is used to generate a user-friendly form for users to create application or cluster and validate their inputs, it follows the [JSON Schema specification](https://json-schema.org/), you need to write this file based on the Helm Chart's values.yaml.
  You can also use Go template syntax in the `application.schema.json` file to quote admin tags to conditionally show some special options.

  For example, if we set an admin tag `maxReplicas=60`, the replicas of cluster can exceed the default limit of 30. 
  ```
  {
    "type": "object",
    "properties": {
      "app": {
        "title": "application",
        "type": "object",
        "properties": {
          "spec": {
            "type": "object",
            "title": "spec",
            "properties": {
              "replicas": {
                "type": "integer",
                "title": "replicas",
                "default": 1,
                "minimum": 0,
                "maximum":
                {{- .maxReplicas | default 30 }}
              },
            },
          }
        }
      }
    }
  }
  ```

* **application.ui.schema.json**  
  The application.ui.schema.json is used to describe the layout and appearance of the form generated by React JsonSchema Form. It can also reference the `application.schema.json` to customize the form's behavior and appearance.

  For example:
  ```
  {
    "ui:order": [
        "app"
    ],
    "app":{
      "ui:order":[
          "spec",
      ],
      "spec": {
        "ui:order":[
          "replicas",
          "*"
        ]
      }
    }
  }
  ```

### Output

The `output` directory includes the following file:

```
└── output
    └── outputs.yaml
```

* **outputs.yaml**  
  It's an optional file that allows the template author to define a set of outputs that can be queried after the template is deployed.

  The following example is to output the generated domain of cluster:
  
  ```
  domain:
    description: the domain for the cluster
    value: {{ .Values.horizon.cluster }}.cloudnative.com
  ```

Overall, the Horizon template format allows developers to easily package and distribute Kubernetes-based applications using Helm Charts, while providing a user-friendly form-based input experience using React JsonSchema Form and json schema.

## GitOps Repository Structure

Based on this template, users can create applications and clusters through a form on the website. We use GitOps approach to managing the resources that are deployed using the Horizon Template, the directory structure of the gitops repo is as follows:

```
.
├── Chart.yaml
├── application.yaml
├── manifest.yaml
├── pipeline
│   ├── pipeline-output.yaml
│   └── pipeline.yaml
├── sre
│   └── sre.yaml
├── system
│   ├── env.yaml
│   ├── horizon.yaml
│   └── restart.yaml
└── tags.yaml
```

* **Chart.yaml**  
The gitops repository is also a Helm chart. It relates to the horizon template through the dependencies function in Chart.yaml.

  For example:

  ```
  apiVersion: v2
  name: demo
  version: 1.0.0
  dependencies:
  - name: deployment
    version: v0.0.1-ec06d596
    repository: https://horizon-harbor-core.horizon.svc.cluster.local/chartrepo/horizon-template
  ```
* **application.yaml**  
A list of parameters filled in by the user through the form generated by the schema.

  For example:

  ```
  deployment:
    app:
      envs:
      - name: test
        value: test
      spec:
        replicas: 1
        resource: x-small
  ```
* **manifest.yaml**  
The version of the template, which is currently 0.0.2.

  For example
  ```
  version: 0.0.2
  ```
* **pipeline**  
  * **pipeline-output.yaml**  
    The pipeline-output file contains the output of CI stage, you can control the output content by [customizing the CI script](../../tutorials/custom-ci.md). The default CI script will output the address of the built image and git info.

    | Parameter            | Meaning                                                                                |
    | -------------------- | -------------------------------------------------------------------------------------- |
    | .Values.image        | Full path of built image.                                                              |
    | .Values.git.{ref}    | Git ref of source code. These types of refs are currently supported: branch,tag,commit |
    | .Values.git.commitID | Commit id of source code                                                               |
    | .Values.git.url      | URL of source code                                                                     |

    For example:
    ```
    deployment:
      image: library/demo:v1
      git:
        branch: master
        commitID: 28992d8f35a6ef38d59181080b3728df9540d8d6
        url: https://github.com/horizoncd/springboot-source-demo.git
    ```
  * **pipeline.yaml**  
    The pipeline.yaml file contains configuration for CI stage, the administrator can [customize the json schema of CI stage](../../tutorials/custom-ci.md) to extend more build types.

    | Parameter                  | Meaning                                                            |
    | -------------------------- | ------------------------------------------------------------------ |
    | .Values.buildType          | Build type of this cluster.  "dockerfile" is supported by default. |
    | .Values.dockerfile.path    | Path of dockerfile.                                                |
    | .Values.dockerfile.content | Content of dockefile                                               |
    ```
    pipeline:
      buildType: dockerfile
      dockerfile:
        path: ./Dockerfile
    ```

* **sre**  

  * **sre.yaml**  
    In some special situations, SRE can override any parameters in the horizon template's `values.yaml` through `sre.yaml`.
    For example, if we want to schedule an application to nodes with a specific label, we can modify `sre.yaml` as follows:

    ```
    deployment: 
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: cloudnative/demo
                operator: In
                values:
                - "true"
    ```

    sre.yaml is generally used to deal with special requirements, while json schema is used to support general requirements.

* **system**  
  
  There are some files in the system directory, which contain some parameters that you can refer to in the template.
  * **env.yaml**  

    | Parameter                 | Meaning                   |
    | ------------------------- | ------------------------- |
    | .Values.env.environment   | Environment name          |
    | .Values.env.region        | Kubernetes name           |
    | .Values.env.namespace     | Namespace name            |
    | .Values.env.baseRegistry  | Address of image registry |
    | .Values.env.ingressDomain | Domain of ingress         |

    For example:
    ```
    deployment:
      env:
        environment: local
        region: local
        namespace: local-1
        baseRegistry: horizon-harbor-core.horizon.svc.cluster.local
        ingressDomain: cloudnative.com
    ```
  * **horizon.yaml** 

    | Parameter                        | Meaning                                                              |
    | -------------------------------- | -------------------------------------------------------------------- |
    | .Values.horizon.application      | Application name                                                     |
    | .Values.horizon.clusterID        | Cluster id                                                           |
    | .Values.horizon.cluster          | Cluster name                                                         |
    | .Values.horizon.template.name    | Template name                                                        |
    | .Values.horizon.template.release | Domain of ingress                                                    |
    | .Values.horizon.priority         | Priority of this cluster. you can use it for oversale or preemption. |

    For example:

    ```
    deployment:
      horizon:
        application: demo
        clusterID: 1
        cluster: demo-1
        template:
          name: deployment
          release: v0.0.1-ec06d596
        priority: P0
    ```
  * **restart.yaml**

    | Parameter           | Meaning                                                                                |
    | ------------------- | -------------------------------------------------------------------------------------- |
    | .Values.restartTime | Restart time of cluster.You can use it in the resource annotations for rolling update. |

    For example:

    ```
    deployment:
      restartTime: "2023-01-06 18:28:49"
    ```

## How to Add a New Template in Horizon

You can create a new template repository on Github and submit the files according to the above requirements. Then, follow the [Template Management Guide](../../user-guide/common-user/template.md) to add the new template.