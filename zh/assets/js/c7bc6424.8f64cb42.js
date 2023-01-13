"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Access Token",toc_max_heading_level:6},s=void 0,i={unversionedId:"user-guide/common-user/access-token",id:"user-guide/common-user/access-token",title:"Access Token",description:"An access token is an access credential with a specific scope and role that helps you authenticate when calling an horizon API. You can create it quickly, revoke it, or let it expire automatically by setting an expiration time. You can integrate it into CI or scripts when you need to invoke the Horizon interface.",source:"@site/docs/user-guide/common-user/access-token.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/access-token",permalink:"/zh/user-guide/common-user/access-token",draft:!1,editUrl:"https://github.com/horizoncd/docs/blob/master/docs/docs/user-guide/common-user/access-token.md",tags:[],version:"current",lastUpdatedBy:"closetool",lastUpdatedAt:1673594694,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"Access Token",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Members",permalink:"/zh/user-guide/common-user/member"},next:{title:"Template",permalink:"/zh/user-guide/common-user/template"}},c={},l=[{value:"Create a resource access token",id:"create-a-resource-access-token",level:2},{value:"Scope vs Role",id:"scope-vs-role",level:2},{value:"Default scopes",id:"default-scopes",level:2},{value:"Expireation and revoke",id:"expireation-and-revoke",level:2},{value:"Token Usage",id:"token-usage",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An access token is an access credential with a specific scope and role that helps you authenticate when calling an horizon API. You can create it quickly, revoke it, or let it expire automatically by setting an expiration time. You can integrate it into CI or scripts when you need to invoke the Horizon interface."),(0,o.kt)("p",null,"Horizon offers two types of access tokens\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource Access Token\uff1acan only be used to access a specific resource and its sub-resources"),(0,o.kt)("li",{parentName:"ul"},"Personal Access Token\uff1acan be used to access all resources owned by yourself.")),(0,o.kt)("p",null,"The two differ only slightly in the scope of resources authorized, let's take the example of creating a resource access token and see how to use it."),(0,o.kt)("h2",{id:"create-a-resource-access-token"},"Create a resource access token"),(0,o.kt)("p",null,"On the Resource Home page, you can create it in Settings->Access Token, which contains the following\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name\uff1atoken name is used to distinguish different tokens"),(0,o.kt)("li",{parentName:"ul"},"expiration date\uff1athe token expiration time, only supports to days dimension, if not filled, the token will never expire."),(0,o.kt)("li",{parentName:"ul"},"role\uff1athe same to role of member\u3002"),(0,o.kt)("li",{parentName:"ul"},"scopes\uff1aa collection of permissions that restrict the types of resources a token can access.")),(0,o.kt)("p",null,'After creation, the token and copy button will appear below the "Add" button, and you can also see the basic information of the token you just generated in the "Active project access tokens" list.'),(0,o.kt)("p",null,"You need to save the accesss token as soon as possible, once the page is refreshed, the token content will no longer be visible."),(0,o.kt)("h2",{id:"scope-vs-role"},"Scope vs Role"),(0,o.kt)("p",null,"Both are used to restrict the resources that the access token can access, and the final permission of the token depends on the intersection of the two."),(0,o.kt)("p",null,"scope is an attribute of access token while role is an attribute of member. We require that the token must be associated with a certain user, so when a resource access token is created, a bot account and member are created with it and bound to the specified role."),(0,o.kt)("h2",{id:"default-scopes"},"Default scopes"),(0,o.kt)("p",null,"The following scopes are provided by horizon by default:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"groups:read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-only permissions for groups and subresources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"groups:read-write"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-write permissions for groups and subresources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"applications:read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-only permissions for applications and subresources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"applications:read-write"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-write permissions for applications and subresources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clusters:read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-only permissions for clusters and subresources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clusters:read-write"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-write permissions for clusters and subresources.")))),(0,o.kt)("h2",{id:"expireation-and-revoke"},"Expireation and revoke"),(0,o.kt)("p",null,'On the right side of the token list, click "delete" to destroy it. If you specify an expiration time when creating a token, the token will not be available for further use after the specified date.'),(0,o.kt)("h2",{id:"token-usage"},"Token Usage"),(0,o.kt)("p",null,"You can refer to How to use horizon api"))}p.isMDXComponent=!0}}]);