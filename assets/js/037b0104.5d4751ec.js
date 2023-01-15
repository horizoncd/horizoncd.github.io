"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"Horizon Template",toc_max_heading_level:6},o=void 0,i={unversionedId:"reference/template/specification",id:"reference/template/specification",title:"Horizon Template",description:"What is Horizon Template",source:"@site/docs/reference/template/specification.md",sourceDirName:"reference/template",slug:"/reference/template/specification",permalink:"/docs/reference/template/specification",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/reference/template/specification.md",tags:[],version:"current",lastUpdatedBy:"kiloson",lastUpdatedAt:1673760126,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"Horizon Template",toc_max_heading_level:6},sidebar:"docs",previous:{title:"apis",permalink:"/docs/reference/api/apis"}},p={},m=[{value:"What is Horizon Template",id:"what-is-horizon-template",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Why do we choose React JsonSchema Form",id:"why-do-we-choose-react-jsonschema-form",level:3},{value:"Template Structure",id:"template-structure",level:2},{value:"Helm Chart",id:"helm-chart",level:3},{value:"Json Schema",id:"json-schema",level:3},{value:"Output",id:"output",level:3},{value:"GitOps Repository Structure",id:"gitops-repository-structure",level:2},{value:"How to Add a New Template in Horizon",id:"how-to-add-a-new-template-in-horizon",level:2}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-horizon-template"},"What is Horizon Template"),(0,r.kt)("p",null,"Horizon uses a packaging format called ",(0,r.kt)("inlineCode",{parentName:"p"},"Horizon Template"),". You can use the Horizon template to deploy various workloads and achieve best practices through a user-friendly form. This document explains the template format and provides basic guidance for building Horizon templates."),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("p",null,"Horizon Templates are based on Helm Charts, Json Schema and React JsonSchema Form, so it is important to have a basic understanding of the following knowledge before proceeding:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://helm.sh/docs/topics/charts/"},"Helm Charts")),(0,r.kt)("br",{parentName:"li"}),"Helm charts contain a series of Kubernetes resources that can be used to deploy various simple or complex applications to a Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://json-schema.org/"},"Json Schema")),(0,r.kt)("br",{parentName:"li"}),"Json Schema is a declarative language that allows you to annotate and validate JSON documents."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/rjsf-team/react-jsonschema-formhttps://json-schema.org/"},"React JsonSchema Form")),(0,r.kt)("br",{parentName:"li"}),"React JsonSchema Form is a library that generates user-friendly HTML forms based on Json Schema. The form collects user input, which is used to render the chart and generate the final manifest file for deployment to Kubernetes.")),(0,r.kt)("h3",{id:"why-do-we-choose-react-jsonschema-form"},"Why do we choose React JsonSchema Form"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"values.json.schema")," specification provided by Helm Chart is mainly for validation, we choose React Json Schema Form mainly because of its stronger form display capabilities. In addition, we applied go template syntax to the json schema file to enhance its flexibility."),(0,r.kt)("h2",{id:"template-structure"},"Template Structure"),(0,r.kt)("p",null,"A typical Horizon template is organized as a collection of files that match this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 _helpers.tpl\n\u2502   \u2514\u2500\u2500 resource.yaml\n\u2502\u2500\u2500 values.yaml\n\u251c\u2500\u2500 schema\n\u2502   \u251c\u2500\u2500 application.schema.json\n\u2502   \u2514\u2500\u2500 application.ui.schema.json\n\u2514\u2500\u2500 output\n    \u2514\u2500\u2500 outputs.yaml\n")),(0,r.kt)("p",null,"It mainly consists of the following parts:"),(0,r.kt)("h3",{id:"helm-chart"},"Helm Chart"),(0,r.kt)("p",null,"Helm chart includes the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 _helpers.tpl\n\u2502   \u2514\u2500\u2500 resource.yaml\n\u2514\u2500\u2500 values.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chart.yaml"),(0,r.kt)("br",{parentName:"li"}),"A standard Helm Chart file that contains meta-information about the chart, such as the chart name, version, and description.")),(0,r.kt)("p",null,"  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v2\nname: deployment\ndescription: A Horizon Template Chart for kubernets\ntype: application\nversion: 0.0.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"README.md"),(0,r.kt)("br",{parentName:"p"}),"\n","A markdown file that provides documentation and usage instructions for the chart."),(0,r.kt)("p",{parentName:"li"},"  For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# Template name\ntemplate description\n## Structure\nstructure description\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"templates"),(0,r.kt)("br",{parentName:"p"}),"\n","A directory contains Go template files that define the Kubernetes resources that will be deployed when the chart is installed. These templates use the values from the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file and the user input from the form to render the final Kubernetes manifest files."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"resource.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","The main resource manifest file to applyed to Kubernetes, we recommend you to use a unique name for the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .Values.horizon.cluster }}"),", for more built-in parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#gitops-repository-structure"},"GitOps Repository Structure"),"."),(0,r.kt)("p",{parentName:"li"},"In addition to the built-in parameters, you can also customize the parameters through the json schema. We recommend putting your parameters in ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.app"),"."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Values.horizon.cluster }}\nspec:\n  replicas: {{ .Values.app.spec.replicas }}\n  selector:\n  template:\n    metadata:\n      labels:\n      {{- include "podLabels" . | nindent 8 }}\n    spec:\n      containers:\n      - name: {{ .Values.horizon.cluster }}\n        image: {{ .Values.image }}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"_helpers.tpl"),(0,r.kt)("br",{parentName:"p"}),"\n","An optional file that contains Go template functions that can be reused across different yaml files."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{{- define "podLabels" -}}\nhorizoncd.github.io/application: {{ .Values.horizon.application }}\nhorizoncd.github.io/cluster: {{ .Values.horizon.cluster }}\nhorizoncd.github.io/environment: {{ .Values.env.environment }}\n{{- end }}\n')))))),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"Helm Chart documentation")," for more information"),(0,r.kt)("h3",{id:"json-schema"},"Json Schema"),(0,r.kt)("p",null,"The json schema directory format is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 schema\n    \u251c\u2500\u2500 application.schema.json\n    \u2514\u2500\u2500 application.ui.schema.json\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"application.schema.json"),(0,r.kt)("br",{parentName:"p"}),"\n","application.schema.json is used to generate a user-friendly form for users to create application or cluster and validate their inputs, it follows the ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema specification"),", you need to write this file based on the Helm Chart's values.yaml.\nYou can also use Go template syntax in the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.schema.json")," file to quote admin tags to conditionally show some special options."),(0,r.kt)("p",{parentName:"li"},"  For example, if we set an admin tag ",(0,r.kt)("inlineCode",{parentName:"p"},"maxReplicas=60"),", the replicas of cluster can exceed the default limit of 30. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "object",\n  "properties": {\n    "app": {\n      "title": "application",\n      "type": "object",\n      "properties": {\n        "spec": {\n          "type": "object",\n          "title": "spec",\n          "properties": {\n            "replicas": {\n              "type": "integer",\n              "title": "replicas",\n              "default": 1,\n              "minimum": 0,\n              "maximum":\n              {{- .maxReplicas | default 30 }}\n            },\n          },\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"application.ui.schema.json"),(0,r.kt)("br",{parentName:"p"}),"\n","The application.ui.schema.json is used to describe the layout and appearance of the form generated by React JsonSchema Form. It can also reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.schema.json")," to customize the form's behavior and appearance."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "ui:order": [\n      "app"\n  ],\n  "app":{\n    "ui:order":[\n        "spec",\n    ],\n    "spec": {\n      "ui:order":[\n        "replicas",\n        "*"\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," directory includes the following file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 output\n    \u2514\u2500\u2500 outputs.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"outputs.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","It's an optional file that allows the template author to define a set of outputs that can be queried after the template is deployed."),(0,r.kt)("p",{parentName:"li"},"The following example is to output the generated domain of cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"domain:\n  description: the domain for the cluster\n  value: {{ .Values.horizon.cluster }}.cloudnative.com\n")))),(0,r.kt)("p",null,"Overall, the Horizon template format allows developers to easily package and distribute Kubernetes-based applications using Helm Charts, while providing a user-friendly form-based input experience using React JsonSchema Form and json schema."),(0,r.kt)("h2",{id:"gitops-repository-structure"},"GitOps Repository Structure"),(0,r.kt)("p",null,"Based on this template, users can create applications and clusters through a form on the website. We use GitOps approach to managing the resources that are deployed using the Horizon Template, the directory structure of the gitops repo is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 application.yaml\n\u251c\u2500\u2500 manifest.yaml\n\u251c\u2500\u2500 pipeline\n\u2502   \u251c\u2500\u2500 pipeline-output.yaml\n\u2502   \u2514\u2500\u2500 pipeline.yaml\n\u251c\u2500\u2500 sre\n\u2502   \u2514\u2500\u2500 sre.yaml\n\u251c\u2500\u2500 system\n\u2502   \u251c\u2500\u2500 env.yaml\n\u2502   \u251c\u2500\u2500 horizon.yaml\n\u2502   \u2514\u2500\u2500 restart.yaml\n\u2514\u2500\u2500 tags.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chart.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","The gitops repository is also a Helm chart. It relates to the horizon template through the dependencies function in Chart.yaml."),(0,r.kt)("p",{parentName:"li"},"  For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: v2\nname: demo\nversion: 1.0.0\ndependencies:\n- name: deployment\n  version: v0.0.1-ec06d596\n  repository: https://horizon-harbor-core.horizon.svc.cluster.local/chartrepo/horizon-template\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"application.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","A list of parameters filled in by the user through the form generated by the schema."),(0,r.kt)("p",{parentName:"li"},"  For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"deployment:\n  app:\n    envs:\n    - name: test\n      value: test\n    spec:\n      replicas: 1\n      resource: x-small\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"manifest.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","The version of the template, which is currently 0.0.2."),(0,r.kt)("p",{parentName:"li"},"  For example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"version: 0.0.2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pipeline"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pipeline-output.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","The pipeline-output file contains the output of CI stage, you can control the output content by ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/custom-ci"},"customizing the CI script"),". The default CI script will output the address of the built image and git info."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.image"),(0,r.kt)("td",{parentName:"tr",align:null},"Full path of built image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.git.{ref}"),(0,r.kt)("td",{parentName:"tr",align:null},"Git ref of source code. These types of refs are currently supported: branch,tag,commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.git.commitID"),(0,r.kt)("td",{parentName:"tr",align:null},"Commit id of source code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.git.url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of source code")))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"deployment:\n  image: library/demo:v1\n  git:\n    branch: master\n    commitID: 28992d8f35a6ef38d59181080b3728df9540d8d6\n    url: https://github.com/horizoncd/springboot-source-demo.git\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pipeline.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","The pipeline.yaml file contains configuration for CI stage, the administrator can ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/custom-ci"},"customize the json schema of CI stage")," to extend more build types."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.buildType"),(0,r.kt)("td",{parentName:"tr",align:null},'Build type of this cluster.  "dockerfile" is supported by default.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.dockerfile.path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of dockerfile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.dockerfile.content"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of dockefile")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"pipeline:\n  buildType: dockerfile\n  dockerfile:\n    path: ./Dockerfile\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sre"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sre.yaml"),(0,r.kt)("br",{parentName:"p"}),"\n","In some special situations, SRE can override any parameters in the horizon template's ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"sre.yaml"),".\nFor example, if we want to schedule an application to nodes with a specific label, we can modify ",(0,r.kt)("inlineCode",{parentName:"p"},"sre.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'deployment: \n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: cloudnative/demo\n            operator: In\n            values:\n            - "true"\n')),(0,r.kt)("p",{parentName:"li"},"sre.yaml is generally used to deal with special requirements, while json schema is used to support general requirements.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"system"),"  "),(0,r.kt)("p",{parentName:"li"},"There are some files in the system directory, which contain some parameters that you can refer to in the template."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"env.yaml"),"  "),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.env.environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.env.region"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.env.namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.env.baseRegistry"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of image registry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.env.ingressDomain"),(0,r.kt)("td",{parentName:"tr",align:null},"Domain of ingress")))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"deployment:\n  env:\n    environment: local\n    region: local\n    namespace: local-1\n    baseRegistry: horizon-harbor-core.horizon.svc.cluster.local\n    ingressDomain: cloudnative.com\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"horizon.yaml")," "),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.application"),(0,r.kt)("td",{parentName:"tr",align:null},"Application name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.clusterID"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.template.name"),(0,r.kt)("td",{parentName:"tr",align:null},"Template name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.template.release"),(0,r.kt)("td",{parentName:"tr",align:null},"Domain of ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.horizon.priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Priority of this cluster. you can use it for oversale or preemption.")))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"deployment:\n  horizon:\n    application: demo\n    clusterID: 1\n    cluster: demo-1\n    template:\n      name: deployment\n      release: v0.0.1-ec06d596\n    priority: P0\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"restart.yaml")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Values.restartTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Restart time of cluster.You can use it in the resource annotations for rolling update.")))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'deployment:\n  restartTime: "2023-01-06 18:28:49"\n')))))),(0,r.kt)("h2",{id:"how-to-add-a-new-template-in-horizon"},"How to Add a New Template in Horizon"),(0,r.kt)("p",null,"You can create a new template repository on Github and submit the files according to the above requirements. Then, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/common-user/template"},"Template Management Guide")," to add the new template."))}u.isMDXComponent=!0}}]);