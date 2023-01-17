"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Kubernetes",toc_max_heading_level:6},o=void 0,s={unversionedId:"user-guide/administrator/kubernetes",id:"user-guide/administrator/kubernetes",title:"Kubernetes",description:"Multi-cloud management capabilities are essential for the CI&CD platform, and Horizon has the ability to manage Kubernetes in both private and public cloud.",source:"@site/docs/user-guide/administrator/kubernetes.md",sourceDirName:"user-guide/administrator",slug:"/user-guide/administrator/kubernetes",permalink:"/zh/docs/user-guide/administrator/kubernetes",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/administrator/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"tom",lastUpdatedAt:1673946872,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{title:"Kubernetes",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Registry",permalink:"/zh/docs/user-guide/administrator/registry"},next:{title:"User Management",permalink:"/zh/docs/user-guide/administrator/user-management"}},l={},u=[{value:"View the Kubernetes list",id:"view-the-kubernetes-list",level:2},{value:"View Kubernetes detail",id:"view-kubernetes-detail",level:2},{value:"Kubernetes information",id:"kubernetes-information",level:3},{value:"Tags",id:"tags",level:3}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Multi-cloud management capabilities are essential for the CI&CD platform, and Horizon has the ability to manage Kubernetes in both private and public cloud."),(0,a.kt)("h2",{id:"view-the-kubernetes-list"},"View the Kubernetes list"),(0,a.kt)("p",null,"See a complete list of kubernetes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Hover your cursor over the ",(0,a.kt)("strong",{parentName:"li"},"More")," icon until a menu appears."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Admin"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes."))),(0,a.kt)("p",null,"The following information is displayed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name - System internal display name."),(0,a.kt)("li",{parentName:"ul"},"Domain - Api-server access address. Domain name is recommended."),(0,a.kt)("li",{parentName:"ul"},"Tags - Tags of the kubernetes, used to associate with groups."),(0,a.kt)("li",{parentName:"ul"},"Status - Show whether the kubernetes has been disabled.")),(0,a.kt)("h2",{id:"view-kubernetes-detail"},"View Kubernetes detail"),(0,a.kt)("p",null,"See all details associated with a specific kubernetes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Hover your cursor over the ",(0,a.kt)("strong",{parentName:"li"},"More")," icon until a menu appears."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Admin"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes.")),(0,a.kt)("li",{parentName:"ol"},"Enter the detail page of target kubernetes by clicking the kubernetes name.")),(0,a.kt)("p",null,"Each kubernetes contains the following sections."),(0,a.kt)("h3",{id:"kubernetes-information"},"Kubernetes information"),(0,a.kt)("p",null,"This section contains basic kubernetes information."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name - A unique name identifier for Kubernetes."),(0,a.kt)("li",{parentName:"ul"},"Display name - System internal display name."),(0,a.kt)("li",{parentName:"ul"},"Server - Just the Domain, as explained in the previous section."),(0,a.kt)("li",{parentName:"ul"},"Ingress domain - The domain name bound to the ingress-nginx component in the k8s cluster."),(0,a.kt)("li",{parentName:"ul"},"Prometheus url - Access address of prometheus providing rich indicator monitoring capabilities in the k8s cluster."),(0,a.kt)("li",{parentName:"ul"},"Registry - Registry associated with the k8s cluster to which the mirror of the workload will be pushed."),(0,a.kt)("li",{parentName:"ul"},"Kubeconfig - Configuration file for accessing Kubernetes."),(0,a.kt)("li",{parentName:"ul"},"Status - Show whether the kubernetes has been disabled.")),(0,a.kt)("h3",{id:"tags"},"Tags"),(0,a.kt)("p",null,"Tag is a kind of powerful and flexible tool to organize the association of different entities. In Horizon, we design the tag system to associate kubernetes and groups."),(0,a.kt)("p",null,"For what use? Well, the background is: The user wants Horizon to host his k8s, but doesn't want others to be able to use it. Given the powerful tag system, we can easily achieve the goal."),(0,a.kt)("p",null,"Let's see some examples. Assuming there is a kubernetes named k0 and a group named g0, the way to make them bound is totally easy-to-use and easy-understanding."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add tags")," in the detail page of k0."),(0,a.kt)("li",{parentName:"ol"},"Input Key & Value as you like, ",(0,a.kt)("strong",{parentName:"li"},"cloudnative/kubernetes: horizon")," for example."),(0,a.kt)("li",{parentName:"ol"},"Go to g0 -> Settings -> Advance -> Link kubernetes."),(0,a.kt)("li",{parentName:"ol"},"Do the same thing as step2. But attention that the form of the Value field here is array, so that a group can link to multiple kubernetes the same time.")),(0,a.kt)("p",null,"In a word, tag system may not be the quickest way to bind entities, but it has to be the most flexible way to do it especially when it comes to many-to-many associations."))}c.isMDXComponent=!0}}]);