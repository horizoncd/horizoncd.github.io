"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"How to Install",toc_max_heading_level:6},o=void 0,i={unversionedId:"tutorials/how-to-install",id:"tutorials/how-to-install",title:"How to Install",description:"This section describes how to perform a new installation of Horizon.",source:"@site/docs/tutorials/how-to-install.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-install",permalink:"/zh/tutorials/how-to-install",draft:!1,editUrl:"https://github.com/horizoncd/docs/blob/master/docs/docs/tutorials/how-to-install.md",tags:[],version:"current",lastUpdatedBy:"closetool",lastUpdatedAt:1673594694,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"How to Install",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Horizon",permalink:"/zh/"},next:{title:"how-to-deploy-your-first-workload",permalink:"/zh/tutorials/how-to-deploy-your-first-workload"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Installation Process",id:"installation-process",level:2},{value:"Horizon Components",id:"horizon-components",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to perform a new installation of Horizon."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Horizon is built entirely on Kubernetes and has been fully tested on its v1.19.3 release."),(0,r.kt)("p",null,"We are assuming you have a basic understanding of what the Kubernetes is and how it runs."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")," to run a local Kubernetes cluster quickly. ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube")," is another highly userful tool to set up a local Kuberentes cluster."),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"The following table lists the minimum and recommended hardware configurations for deploying Horizon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,r.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"4 CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"8 CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mem"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disk"),(0,r.kt)("td",{parentName:"tr",align:null},"40 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"160 GB")))),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/"},"Kubernetes")," cluster version 1.19.3 or later."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," command-line tool."),(0,r.kt)("li",{parentName:"ul"},"Have a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"kubeconfig")," file (default location is ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),")."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," command-line tool."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx"},"ingress-nginx")," or any other ingress controller.")),(0,r.kt)("h2",{id:"installation-process"},"Installation Process"),(0,r.kt)("p",null,"We use helm to organize Horizon's whole dependencies, which means you can lauch a Horizon instance by simply executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install horizon -nhorizon --create-namespace https://github.com/horizoncd/installation/releases/download/${VERSION}/horizon-${VERSION}.tgz\n")),(0,r.kt)("p",null,"Please replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<VERSION>")," above with the specific version number."),(0,r.kt)("p",null,"Chart documentation is available in ",(0,r.kt)("a",{parentName:"p",href:"https://g.hz.netease.com/music-cloud-native/core-charts/horizon-charts/horizon"},"horizon chart README"),"."),(0,r.kt)("p",null,"You can use kubectl to check if everything works correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n horizon\nkubectl get pod -n tekton-pipelines\n")),(0,r.kt)("h2",{id:"horizon-components"},"Horizon Components"),(0,r.kt)("p",null,"The table below lists the key components that are deployed when you deploy Horizon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gitlab"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"15.5.1-ce.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Argo-cd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v2.4.11"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tekton"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard:",(0,r.kt)("inlineCode",{parentName:"td"}," v0.11.1"),(0,r.kt)("br",null),"pipeline:\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"v0.18.1"),(0,r.kt)("br",null),"triggers:\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"v0.11.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chartmuseum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.15.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.4.6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minio"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2022.10.29-debian-11-r0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6.0.7-alpine"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mysql"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.0.31-debian-11-r0"))))))}d.isMDXComponent=!0}}]);