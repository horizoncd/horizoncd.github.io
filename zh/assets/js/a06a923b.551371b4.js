"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[815],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2729:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"Horizon",slug:"/"},i=void 0,l={unversionedId:"home/horizon",id:"home/horizon",title:"Horizon",description:"Horizon is a cloud-native application Continues Delivery (CD) platform. Platform team can let the developers  deploy their code to cloud",source:"@site/docs/home/horizon.md",sourceDirName:"home",slug:"/",permalink:"/zh/docs/",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/home/horizon.md",tags:[],version:"current",lastUpdatedBy:"tom",lastUpdatedAt:1673706616,formattedLastUpdatedAt:"2023\u5e741\u670814\u65e5",frontMatter:{title:"Horizon",slug:"/"},sidebar:"docs",next:{title:"How to Install",permalink:"/zh/docs/tutorials/how-to-install"}},s={},u=[{value:"Why Horizon",id:"why-horizon",level:2},{value:"Features",id:"features",level:2},{value:"GitOps",id:"gitops",level:3},{value:"Horizon Template",id:"horizon-template",level:3},{value:"RBAC &amp; Member",id:"rbac--member",level:3},{value:"Ease For Integration",id:"ease-for-integration",level:3},{value:"Ease For use",id:"ease-for-use",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Horizon-Core",id:"horizon-core",level:4},{value:"Gitlab &amp; ArgoCD",id:"gitlab--argocd",level:4},{value:"Tekton &amp; S3",id:"tekton--s3",level:4},{value:"Grafana:",id:"grafana",level:4},{value:"MySql &amp; Redis",id:"mysql--redis",level:4},{value:"FAQs",id:"faqs",level:2},{value:"Horizon vs ArgoCD",id:"horizon-vs-argocd",level:3},{value:"Horizon vs OpenShift",id:"horizon-vs-openshift",level:3},{value:"Horizon GitOps",id:"horizon-gitops",level:2},{value:"Horizon Usage",id:"horizon-usage",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Horizon is a cloud-native application Continues Delivery (CD) platform. Platform team can let the developers  deploy their code to cloud\nand kubernetes easily, efficiency and with best practice. Horizon is inspired by ArgoCD and AWS Proton."),(0,n.kt)("h2",{id:"why-horizon"},"Why Horizon"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"standardized"),":  kubernetes is flexible and powerful, but it is complex. it's hard to let all the developers have a comprehensive understanding of kubernetes and practice best practice. so horizon introduce  a template system to make the best practice under control, and also provide efficient delivery. For example, Platform Team can  provide basic spec of resource tiny(0.5core, 512MB)\u3001small(1core, 1GB), middle(2core, 4GB) etc. by default, not for the developer to select limit or request resource on common case."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"security and reliable"),"\uff1asecurity and reliable is always a challenge. In Horizon, Horizon  make every change of application durable, reversible and auditable. It's done with our best practice of GitOps. And  Horizon introduce rbac&member system  to let you  have best practice on fine-grained  permission control."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"multi-cloud"),": Horizon provide a consistent application platform to manage multi-cloud, hybrid cloud."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"infrastructure agnostic"),"\uff1ahorizon doesn't limit the kind of workload. the basic kubernetes workloads and self defined ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CR")," are all supported."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"efficiency"),"\uff1aplatform team can  quickly make an  end to end  best practice workload delivery  based on Horizon template.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("h3",{id:"gitops"},"GitOps"),(0,n.kt)("p",null,'In Horizon, Git is Used as the only "The Source Of Truth", Horizon stores template  and all values in Git repository.\nEvery change  are durable, reversible and auditable, Including code, image, environment variables, resource spec, etc.'),(0,n.kt)("h3",{id:"horizon-template"},"Horizon Template"),(0,n.kt)("p",null,"Horizon Template is based on helm and jsonschema.  The Platform Team can make the basic practice (including security, affinity, priority, resource, etc.)\nby default, and provide user a simple and uniform interface which is defined by jsonschema files. jsonschema is used for provide a user friend HTML form\non the Horizon Based on react-jsonschema-form.  It's highly  Scalable and flexible to make your own best practice based on the simple template system.  "),(0,n.kt)("h3",{id:"rbac--member"},"RBAC & Member"),(0,n.kt)("p",null,"Horizon Provide a  RBAC & Member system  Just like Gitlab. You can easily define your Own PlatForm Member and Role(Just like Kubernetes role and rolebinding).\nIn our Practice, we Provide Role like PE, Owner, Maintainer, Guest. the  Owner is binding with the Read(list pods, read all properties, etc.)/Write(deploy, builddeploy, restart, release, delete etc.) Permission, the guest just have the read permission.  "),(0,n.kt)("h3",{id:"ease-for-integration"},"Ease For Integration"),(0,n.kt)("p",null,"Horizon Provide OpenAPI, AccessToken, Oauth2.0, IDP Connector, Webhooks. It makes easy to d integrate internal system.  "),(0,n.kt)("h3",{id:"ease-for-use"},"Ease For use"),(0,n.kt)("p",null,"We Also Provide Product Features, Like Template Management, Kubernetes Management, Monitoring Management, Environment Management.\nPlatForm Team can easily set up  through the horizon web ui."),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"arch",src:o(9099).Z,width:"1880",height:"678"})),(0,n.kt)("h4",{id:"horizon-core"},"Horizon-Core"),(0,n.kt)("p",null,"The Horizon Core Server is the Rest Server which export the OpenAPIs consume by the Web UI, CLI, and other systems. it also provides features like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes and environment Management"),(0,n.kt)("li",{parentName:"ul"},"Template Management"),(0,n.kt)("li",{parentName:"ul"},"PrivateToken,AccessToken Management"),(0,n.kt)("li",{parentName:"ul"},"Group,application,cluster management"),(0,n.kt)("li",{parentName:"ul"},"CI,CD Pipeline Management"),(0,n.kt)("li",{parentName:"ul"},"WekHook Management"),(0,n.kt)("li",{parentName:"ul"},"User and Member Management"),(0,n.kt)("li",{parentName:"ul"},"IDP Management")),(0,n.kt)("h4",{id:"gitlab--argocd"},"Gitlab & ArgoCD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Gitlab: Gitlab store all the configs of an application, "The Only Source Of Truth" of an application.'),(0,n.kt)("li",{parentName:"ul"},"ArgoCD:  ArgoCD is our default  GitOps Engine that sync  Application Workloads from  git repo to Kubernetes.")),(0,n.kt)("h4",{id:"tekton--s3"},"Tekton & S3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tekton: the cloudnative pipeline used for our default ci engine, to auto build images from source."),(0,n.kt)("li",{parentName:"ul"},"S3: Completed Pipelines are restore to S3, you can use any of S3 Compatible Service like Mino or Aws S3 service  and soon. ")),(0,n.kt)("h4",{id:"grafana"},"Grafana:"),(0,n.kt)("p",null,"For convenient, we default integrate monitoring feature into Horizon. Just Config you Source Prometheus, Horizon will automatically\nretrieve the metric to show the Metric DashBoard on Horizon-Web."),(0,n.kt)("h4",{id:"mysql--redis"},"MySql & Redis"),(0,n.kt)("p",null,"For Store and Cache Basic meta Info, such like  member, user, token, webhook, IDPs and soon."),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("h3",{id:"horizon-vs-argocd"},"Horizon vs ArgoCD"),(0,n.kt)("p",null,"ArgoCD is a great tool  for the kubernetes platform team or users that familiar with kubernetes, actually  Horizon use argoCD as the default GitOps engine. But we think it is not very user-friendly for the application developer team. We make Horizon more user-friendly  by  core features like group\u3001member & rbac\u3001 template and so on."),(0,n.kt)("h3",{id:"horizon-vs-openshift"},"Horizon vs OpenShift"),(0,n.kt)("p",null,"We think both Horizon and  Openshift  solve the same problem. They all give you the ability to build\u3001deploy and run applications on kubernetes and cloud.  But they looks  fundamentally  different, this mainly because openshift is more an extension and enhancement of kubernetes, but now horizon is aimed to be a  continues  delivery platform based on kubernetes and cloud."),(0,n.kt)("h2",{id:"horizon-gitops"},"Horizon GitOps"),(0,n.kt)("p",null,"GitOps is a best practice of application delivery,  Horizon Follow GitOps Best Practice. We use Git to make  every change of application stable, reliable, secure, auditable and reversible."),(0,n.kt)("h2",{id:"horizon-usage"},"Horizon Usage"),(0,n.kt)("p",null,"Within NetEase Cloud Music, the platform team delivers a variety of service template to users based on Horizon, including webserver,  serverless (Knative application), middleware etc. 400+  R&D make hundreds of build and deploy based on Horizon every day."))}d.isMDXComponent=!0},9099:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/horizon-opensource-arch-d7a6d3d217198c2e20d377615c7e71db.jpg"}}]);