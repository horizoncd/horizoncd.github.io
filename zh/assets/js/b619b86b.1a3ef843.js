"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(r),g=a,k=s["".concat(d,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={title:"Members",toc_max_heading_level:6},l=void 0,o={unversionedId:"user-guide/common-user/member",id:"user-guide/common-user/member",title:"Members",description:"A member indicates what role a user plays under a particular resource, and the role is bound to a collection of permissions that can be quickly expanded and modified by the administrator through the installation configuration.",source:"@site/docs/user-guide/common-user/member.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/member",permalink:"/zh/docs/user-guide/common-user/member",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/member.md",tags:[],version:"current",lastUpdatedBy:"xu.zhu",lastUpdatedAt:1681459998,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"Members",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Monitor",permalink:"/zh/docs/user-guide/common-user/monitor"},next:{title:"Access Token",permalink:"/zh/docs/user-guide/common-user/access-token"}},d={},m=[{value:"Member&#39;s permission management",id:"members-permission-management",level:2},{value:"Inheritance and overrides",id:"inheritance-and-overrides",level:2},{value:"Role",id:"role",level:2}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A member indicates what role a user plays under a particular resource, and the role is bound to a collection of permissions that can be quickly expanded and modified by the administrator through the installation configuration."),(0,a.kt)("h2",{id:"members-permission-management"},"Member's permission management"),(0,a.kt)("p",null,"The privileges of a member are determined by the role, and a member with a high privilege role can manage members of the same level or lower privileges."),(0,a.kt)("p",null,"For example, the owner of a group can add and delete other owner, maintainer, and guest members under the group, and can adjust these members to the role of owner or below. The rank of roles can be configured by the administrator."),(0,a.kt)("h2",{id:"inheritance-and-overrides"},"Inheritance and overrides"),(0,a.kt)("p",null,"When a user is not added to the member list of a resource, the user's role under this resource is inherited from the parent resource, and when the user is a direct member of both the child resource and the parent resource, his final role is only related to the child resource."),(0,a.kt)("h2",{id:"role"},"Role"),(0,a.kt)("p",null,"The following roles are provided by horizon by default, in descending order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PE"),(0,a.kt)("li",{parentName:"ul"},"Owner"),(0,a.kt)("li",{parentName:"ul"},"Maintainer"),(0,a.kt)("li",{parentName:"ul"},"Guest")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Action"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Guest"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Maintainer"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Owner"),(0,a.kt)("th",{parentName:"tr",align:"center"},"PE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"See a list of groups"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/transfer groups"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Link kubernetes"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Delete groups"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"See a list of applications"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/transfer applications"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Set default region"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Delete applications"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/copy/edit/free clusters"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Delete clusters"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Build/deploy/restart/rollback clusters"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Online/offline/delete pods"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"See a list of pipelineruns"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/delete tags"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/delete access tokens"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/delete webhooks"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/delete oauth app"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"See a list of templates"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/delete template"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Create/edit/delete template schema tags"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,a.kt)("p",null,"In addition, the top-level group needs to be created by an administrator."),(0,a.kt)("p",null,"The above roles as well as the rank can be modified by the administrator through the installation configuration."))}p.isMDXComponent=!0}}]);