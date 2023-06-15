"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Template"},i=void 0,l={unversionedId:"user-guide/common-user/template",id:"user-guide/common-user/template",title:"Template",description:"What is Template",source:"@site/docs/user-guide/common-user/template.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/template",permalink:"/zh/docs/user-guide/common-user/template",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/template.md",tags:[],version:"current",lastUpdatedBy:"Kiloson",lastUpdatedAt:1686812074,formattedLastUpdatedAt:"2023\u5e746\u670815\u65e5",frontMatter:{title:"Template"},sidebar:"docs",previous:{title:"Access Token",permalink:"/zh/docs/user-guide/common-user/access-token"},next:{title:"Oauth 2.0 Application",permalink:"/zh/docs/user-guide/common-user/oauth-app"}},p={},s=[{value:"What is Template",id:"what-is-template",level:2},{value:"Create a Template",id:"create-a-template",level:2},{value:"Visiable",id:"visiable",level:2},{value:"Member",id:"member",level:2},{value:"Template Specification",id:"template-specification",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-template"},"What is Template"),(0,a.kt)("p",null,"A template is a Helm chart that is used by Horizon to create applications in a Kubernetes cluster. When creating a cluster, Horizon retrieves the template from the repository, renders it, and pushes it to the GitOps repository. The resources are then created in the cluster through the Manifest in the GitOps repository."),(0,a.kt)("h2",{id:"create-a-template"},"Create a Template"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"group")," option in the top left corner of the page."),(0,a.kt)("li",{parentName:"ol"},"Enter the group you belong to."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"template")," option in the left-side menu."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"New template")," in the top right corner of the page."),(0,a.kt)("li",{parentName:"ol"},"Enter the relevant information for the template."),(0,a.kt)("li",{parentName:"ol"},"Click on  ",(0,a.kt)("strong",{parentName:"li"},"Submit")," .")),(0,a.kt)("h2",{id:"visiable"},"Visiable"),(0,a.kt)("p",null,"Templates are generally created by administrators. If a regular user has specific requirements, they can create private templates in their own group."),(0,a.kt)("h2",{id:"member"},"Member"),(0,a.kt)("p",null,"Private templates can be managed in terms of permissions. "),(0,a.kt)("p",null,"If the option to make them visible only to the owner is selected, only the owner can use the template to create applications and clusters."),(0,a.kt)("p",null,"When determining the user role for a template, Horizon will search for the first role it finds by going up one layer at a time from the current template, and this will be the user's role for that template. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/template/specification"},"Template Specification")," for more information on how to create templates."),(0,a.kt)("h2",{id:"template-specification"},"Template Specification"),(0,a.kt)("p",null,"Details about template please refer to ","[Specification]"))}m.isMDXComponent=!0}}]);