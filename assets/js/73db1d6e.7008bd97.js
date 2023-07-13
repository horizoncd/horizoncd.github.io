"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Template"},i=void 0,l={unversionedId:"user-guide/common-user/template",id:"user-guide/common-user/template",title:"Template",description:"What is Template",source:"@site/docs/user-guide/common-user/template.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/template",permalink:"/docs/user-guide/common-user/template",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/template.md",tags:[],version:"current",lastUpdatedBy:"Kiloson",lastUpdatedAt:1689233037,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"Template"},sidebar:"docs",previous:{title:"Access Token",permalink:"/docs/user-guide/common-user/access-token"},next:{title:"Oauth 2.0 Application",permalink:"/docs/user-guide/common-user/oauth-app"}},c={},p=[{value:"What is Template",id:"what-is-template",level:2},{value:"Create a Template",id:"create-a-template",level:2},{value:"Visiable",id:"visiable",level:2},{value:"Member",id:"member",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Memcached",id:"memcached",level:3},{value:"Template Specification",id:"template-specification",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-template"},"What is Template"),(0,n.kt)("p",null,"A template is a Helm chart that is used by Horizon to create applications in a Kubernetes application instance. When creating a application instance, Horizon retrieves the template from the repository, renders it, and pushes it to the GitOps repository. The resources are then created in the application instance through the Manifest in the GitOps repository."),(0,n.kt)("h2",{id:"create-a-template"},"Create a Template"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"group")," option in the top left corner of the page."),(0,n.kt)("li",{parentName:"ol"},"Enter the group you belong to."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"template")," option in the left-side menu."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"New template")," in the top right corner of the page."),(0,n.kt)("li",{parentName:"ol"},"Enter the relevant information for the template."),(0,n.kt)("li",{parentName:"ol"},"Click on  ",(0,n.kt)("strong",{parentName:"li"},"Submit")," .")),(0,n.kt)("h2",{id:"visiable"},"Visiable"),(0,n.kt)("p",null,"Templates are generally created by administrators. If a regular user has specific requirements, they can create private templates in their own group."),(0,n.kt)("h2",{id:"member"},"Member"),(0,n.kt)("p",null,"Private templates can be managed in terms of permissions. "),(0,n.kt)("p",null,"If the option to make them visible only to the owner is selected, only the owner can use the template to create applications and application instances."),(0,n.kt)("p",null,"When determining the user role for a template, Horizon will search for the first role it finds by going up one layer at a time from the current template, and this will be the user's role for that template. Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/template/specification"},"Template Specification")," for more information on how to create templates."),(0,n.kt)("h2",{id:"catalog"},"Catalog"),(0,n.kt)("p",null,"Catalog is a special kind of template, it would create the predefined application instance, like memcached, mysql, etc, and allows developers creating instances with a few inputs. Catalog support the following kinds:"),(0,n.kt)("h3",{id:"memcached"},"Memcached"),(0,n.kt)("p",null,"Memcached is a general-purpose distributed memory caching system. We mede ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/memcached"},"a template for memcached"),", you could using it to create a memcached instance."),(0,n.kt)("h2",{id:"template-specification"},"Template Specification"),(0,n.kt)("p",null,"Details about template please refer to ","[Specification]"))}m.isMDXComponent=!0}}]);