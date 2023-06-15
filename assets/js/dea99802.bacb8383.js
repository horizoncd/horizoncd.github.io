"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Custom CI",toc_max_heading_level:6},i=void 0,l={unversionedId:"tutorials/custom-ci",id:"tutorials/custom-ci",title:"Custom CI",description:"How does Horizon CI work",source:"@site/docs/tutorials/custom-ci.md",sourceDirName:"tutorials",slug:"/tutorials/custom-ci",permalink:"/docs/tutorials/custom-ci",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/tutorials/custom-ci.md",tags:[],version:"current",lastUpdatedBy:"Kiloson",lastUpdatedAt:1686812074,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"Custom CI",toc_max_heading_level:6},sidebar:"docs",previous:{title:"How to deploy your first workload",permalink:"/docs/tutorials/how-to-deploy-your-first-workload"},next:{title:"IDP",permalink:"/docs/user-guide/administrator/idp"}},p={},s=[{value:"How does Horizon CI work",id:"how-does-horizon-ci-work",level:2},{value:"How to customize your CI",id:"how-to-customize-your-ci",level:2},{value:"Build config",id:"build-config",level:3},{value:"Step scripts",id:"step-scripts",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Image of step",id:"image-of-step",level:4},{value:"Git authentication",id:"git-authentication",level:4},{value:"Callback in deploy step",id:"callback-in-deploy-step",level:4},{value:"Volume Mounts",id:"volume-mounts",level:4}],m={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-does-horizon-ci-work"},"How does Horizon CI work"),(0,r.kt)("p",null,"Horizon CI works based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tektoncd/pipeline"},"tekton pipeline")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tektoncd/triggers"},"tekton triggers"),". A tekton pipeline will be triggered for an incoming buildDeploy request to perform typical steps, such as compiling and pushing image. Then, the pipeline output that holds artifact image url and other information will be returned to Horizon core by calling back http post request. Horizon CI pipeline includes four steps that is shown below:\n",(0,r.kt)("img",{alt:"pipeline",src:n(8208).Z,width:"2084",height:"1084"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git step: use token to pull source code."),(0,r.kt)("li",{parentName:"ul"},"Compile step: compile and package the source code, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"mvn clean package"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"go build"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docker build"),", etc."),(0,r.kt)("li",{parentName:"ul"},"Image step: build image from dockerfile to store artifact and push it to registry."),(0,r.kt)("li",{parentName:"ul"},"Deploy step: assemble pipeline output and callback horizon api.")),(0,r.kt)("h2",{id:"how-to-customize-your-ci"},"How to customize your CI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In order to customize CI, you may prepare two parts of modification.")),(0,r.kt)("h3",{id:"build-config"},"Build config"),(0,r.kt)("p",null,"Build config holds user's build configurations of application or cluster, which is characterized as json object ",(0,r.kt)("inlineCode",{parentName:"p"},"pipelineJSONBlob")," in pipeline.\n",(0,r.kt)("img",{src:n(9861).Z,width:"1920",height:"1080"}),"\nYou can customize your own build based on ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org"},"json schema")," that contains two parts: json schema and ui schema. Override them in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml"},"values.yaml")," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/tree/main/charts/horizon"},"horizon chart"),", which has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'build_schema:\n  build_json_schema: |\n    # your json schema, for example:\n    {\n      "type": "object",\n      "required": [\n        "buildType"\n      ],\n      "properties": {\n        "buildType": {\n          "type": "string",\n          "title": "Build type",\n          "oneOf": [\n            {\n              "enum": [\n                "dockerfile"\n              ],\n              "title": "Dockerfile build"\n            }\n          ],\n          "default": "dockerfile"\n        }\n      },\n      "dependencies": {...}\n    }\n  build_ui_schema: |\n    # your ui schema, for example:\n    {\n      "ui:order": [\n        "buildType",\n        "dockerfile",\n        "buildArgs"\n      ],\n      "dockerfile": {\n        "content": {\n          "ui:widget": "textarea",\n          "ui:options": {\n            "rows": 18\n          }\n        }\n      },\n      "buildType": {\n        "ui:widget": "radio",\n        "ui:options": {\n          "inline": true\n        }\n      }\n    }\n')),(0,r.kt)("p",null,"You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org"},"json schema")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/template/specification#json-schema"},"json schema in horizon template")," for more information."),(0,r.kt)("h3",{id:"step-scripts"},"Step scripts"),(0,r.kt)("p",null,"The step scripts in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml"},"values.yaml")," also can be overridden to perform various pipelines according to user's build config above. The associated file structure is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tektonci-resources:\n  horizon:\n    script:\n      git: |\n        # your custom script of git step...\n      compile: |\n        # your custom script of compile step...\n      image: |\n        # your custom script of image step...\n      deploy: |\n        # your custom script of deploy step...\n")),(0,r.kt)("p",null,"The steps can retrieve the following build parameters from horizon core:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"params"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JWT token used to callback horizon api"),(0,r.kt)("td",{parentName:"tr",align:"left"},'usage: add "X-Horizon-JWT-Token: $TOKEN" header to HTTP request')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"application"),(0,r.kt)("td",{parentName:"tr",align:"left"},"application name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cluster name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clusterID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cluster ID"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"environment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"environment name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gitRepositoryUrl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"git repository url of source code"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gitSubfolder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sub folder from context"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gitCommit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"git commit of revision"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gitBranch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"git branch of revision"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gitTag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"git tag of revision"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pipelineJSONBlob"),(0,r.kt)("td",{parentName:"tr",align:"left"},"json string of build config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"you can parse it by json parser, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"jq"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"imageURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"artifact image url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the generated artifact image will be push to the url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pipelinerunID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"current pipelinerun ID in horizon core"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"current request ID"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"You can access above parameters by ",(0,r.kt)("a",{parentName:"p",href:"https://tekton.dev/docs/pipelines/tasks/#specifying-parameters"},"variable substitutions")," in your scripts. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export TOKEN="$(params.token)"\necho "token: ${TOKEN}"\n')),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("h4",{id:"image-of-step"},"Image of step"),(0,r.kt)("p",null,"If your script uses some tools that are not in the ",(0,r.kt)("strong",{parentName:"p"},"default image"),", you can override the images of build step in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml"},"values.yaml"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tektonci-resources:\n  horizon:\n    buildTask: \n      image:\n        gitStep: ubuntu:18.04\n        compileStep: xxx\n        imageStep: xxx\n    deployTask:\n      image:\n        deployStep: xxx\n")),(0,r.kt)("h4",{id:"git-authentication"},"Git authentication"),(0,r.kt)("p",null,"Pulling user's source code with token or ssh-auth is supported in the ",(0,r.kt)("strong",{parentName:"p"},"default git step"),". You can config git repository tokens and ssh private keys in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml"},"values.yaml"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tektonci-resources:\n  gitRepos:\n    http:\n      - url: https://github.com\n        token: KL4U5Y6HF14EOJ4IE==\n      - url: https://gitlab.com\n        token: DS4U5Y6HF54GOE5JF==\n    ssh:\n      - url: github.com\n        privateKey: |\n          -----BEGIN OPENSSH PRIVATE KEY-----\n          ...\n          -----END OPENSSH PRIVATE KEY-----\n")),(0,r.kt)("h4",{id:"callback-in-deploy-step"},"Callback in deploy step"),(0,r.kt)("p",null,"You need ",(0,r.kt)("strong",{parentName:"p"},"callback horizon api")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/apis/internal/v2/clusters/$CLUSTER_ID/deploy")," with token to pass back the pipeline output you generate in your ",(0,r.kt)("strong",{parentName:"p"},"custom deploy step script"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -k -sSL -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "X-Horizon-JWT-Token: $TOKEN" \\\n  -d "$REQUEST_BODY"\n  -o $OUTPUT "$DEPLOY_URL"\n')),(0,r.kt)("p",null,"where the ",(0,r.kt)("inlineCode",{parentName:"p"},"REQUEST_BODY")," is structured as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "output": {\n    "image": "harbor.server.org/artifact-image/demo:v1.0",\n    ...\n  },\n  "pipelinerunID": 2435\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," can be used to pass the CI results to CD based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/template/specification"},"horizon template"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# deployment.yaml\nkind: Deployment\nspec:\n  template:\n    spec:\n      containers:\n      - name: xxx\n        image: {{ .Values.image }}\n")),(0,r.kt)("p",null,"which specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"output.image")," as the container image in deployment template."),(0,r.kt)("h4",{id:"volume-mounts"},"Volume Mounts"),(0,r.kt)("p",null,"You can configure ",(0,r.kt)("inlineCode",{parentName:"p"},"extraVolumeMounts")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/helm-charts/blob/main/charts/horizon/values.yaml"},"values.yaml")," to mount volumes into step container. Volume type ",(0,r.kt)("inlineCode",{parentName:"p"},"persistentVolumeClaim"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"emptyDir")," (default) is supported. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tektonci-resources:\n  extraVolumeMounts:\n      # persistentVolumeClaim\n    - name: persistent-volume\n      existingClaim: ci-claim\n      mountPath: /persistent_volume\n      readOnly: true\n      # hostPath\n    - name: m2\n      hostPath: /root/.m2\n      mountPath: /root/.m2\n      # emptyDir, if neither persistentVolumeClaim nor hostPath\n    - name: maven-repository\n      mountPath: /root/.m2\n      subPath: repository\n      readOnly: false\n")))}c.isMDXComponent=!0},9861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-app-demo2-eb3756b5289a6235d971c247505ea146.png"},8208:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline-1c547674d4fa9ecac7cfc6c32af09a12.png"}}]);