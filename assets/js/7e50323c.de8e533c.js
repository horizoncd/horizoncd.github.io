"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[340],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"User Space",toc_max_heading_level:6},s=void 0,l={unversionedId:"user-guide/common-user/user-space",id:"user-guide/common-user/user-space",title:"User Space",description:"User Space is a place where you can manage all of your personal belongings.",source:"@site/docs/user-guide/common-user/user-space.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/user-space",permalink:"/docs/user-guide/common-user/user-space",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/user-space.md",tags:[],version:"current",lastUpdatedBy:"tom",lastUpdatedAt:1673706616,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"User Space",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Webhook",permalink:"/docs/user-guide/common-user/webhook"},next:{title:"Using the API",permalink:"/docs/reference/api/use-the-apis"}},i={},c=[{value:"Profile",id:"profile",level:2},{value:"Basic Info",id:"basic-info",level:3},{value:"OIDC Link",id:"oidc-link",level:3},{value:"Resources",id:"resources",level:3},{value:"Personal Access Token",id:"personal-access-token",level:2},{value:"Create a personal access token",id:"create-a-personal-access-token",level:3},{value:"Revoke a personal access token",id:"revoke-a-personal-access-token",level:3},{value:"Personal access token scopes",id:"personal-access-token-scopes",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"User Space is a place where you can manage all of your personal belongings."),(0,r.kt)("h2",{id:"profile"},"Profile"),(0,r.kt)("p",null,"In your profile, you can view your basic information, the status of your OIDC link, and a list of your resources such as applications, clusters, and templates."),(0,r.kt)("h3",{id:"basic-info"},"Basic Info"),(0,r.kt)("p",null,"The basic information section of your profile displays your name, email address, phone number, and account status such as whether you are an administrator or if your account is banned."),(0,r.kt)("h3",{id:"oidc-link"},"OIDC Link"),(0,r.kt)("p",null,"In this area, you can manage your OIDC Link. If your account is linked to an identity provider (idP), you can log in using that idP."),(0,r.kt)("p",null,"Currently, Horizon does not support manual registration. If you log in with an idP using OIDC for the first time, you will be automatically registered."),(0,r.kt)("p",null,"Note that once you are registered with an idP, it ",(0,r.kt)("strong",{parentName:"p"},"cannot")," be unlinked."),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("p",null,"In the resources area, you can view your applications, clusters, and templates.\nIf any other resources are added in the future, they will also appear in this area."),(0,r.kt)("h2",{id:"personal-access-token"},"Personal Access Token"),(0,r.kt)("p",null,"With a personal access token, you could access corresponding apis."),(0,r.kt)("h3",{id:"create-a-personal-access-token"},"Create a personal access token"),(0,r.kt)("p",null,"To create as many personal access tokens as you need, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your avatar in the top-right corner of the screen."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},'"Personal Space"'),"."),(0,r.kt)("li",{parentName:"ol"},"On the left sidebar, choose ",(0,r.kt)("strong",{parentName:"li"},'"Personal Access Token"'),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the token and specify an optional expiration date if desired."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("a",{parentName:"li",href:"#personal-access-token-scopes"},"desired scopes")," for the token."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Add"'),".")),(0,r.kt)("p",null,"Remember to store the personal access token in a secure location because you will not be able to access it again after leaving the page."),(0,r.kt)("h3",{id:"revoke-a-personal-access-token"},"Revoke a personal access token"),(0,r.kt)("p",null,"To revoke a personal access token at any time, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your avatar in the top-right corner of the screen."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},'"Personal Space"'),"."),(0,r.kt)("li",{parentName:"ol"},"On the left sidebar, choose ",(0,r.kt)("strong",{parentName:"li"},'"Personal Access Token"'),"."),(0,r.kt)("li",{parentName:"ol"},'In the "Active project access tokens" area, click ',(0,r.kt)("strong",{parentName:"li"},'"Delete"')," next to the key you wish to revoke.")),(0,r.kt)("h3",{id:"personal-access-token-scopes"},"Personal access token scopes"),(0,r.kt)("p",null,"A personal access token can perform actions based on the assigned scopes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Access"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"applications:read-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-only access to applications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"applications:read-write")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-write access to applications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clsuters:read-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-only access to clusters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clsuters:read-write")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-write access to clusters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groups:read-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-only access to groups")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groups:read-write")),(0,r.kt)("td",{parentName:"tr",align:null},"Grants read-write access to groups")))))}u.isMDXComponent=!0}}]);