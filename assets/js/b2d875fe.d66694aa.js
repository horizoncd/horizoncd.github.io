"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[12],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={title:"User Management",toc_max_heading_level:6},i=void 0,s={unversionedId:"user-guide/administrator/user-management",id:"user-guide/administrator/user-management",title:"User Management",description:"User Management allows you to view, modify, and manage user information, as well as the status of their OIDC Link, which represents a connection between a Horizon account and an Identity Provider (IdP). With this connection, users can log in through the IdP.",source:"@site/docs/user-guide/administrator/user-management.md",sourceDirName:"user-guide/administrator",slug:"/user-guide/administrator/user-management",permalink:"/docs/user-guide/administrator/user-management",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/administrator/user-management.md",tags:[],version:"current",lastUpdatedBy:"xu.zhu",lastUpdatedAt:1681459998,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{title:"User Management",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/user-guide/administrator/kubernetes"},next:{title:"Group",permalink:"/docs/user-guide/common-user/group"}},l={},m=[{value:"Modify OIDC Link",id:"modify-oidc-link",level:2},{value:"Administrator privileges Management",id:"administrator-privileges-management",level:2},{value:"Ban a User",id:"ban-a-user",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"User Management allows you to view, modify, and manage user information, as well as the status of their ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC")," Link, which represents a connection between a Horizon account and an Identity Provider (IdP). With this connection, users can log in through the IdP."),(0,a.kt)("h2",{id:"modify-oidc-link"},"Modify OIDC Link"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"more")," at the top of the page."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"admin")," option."),(0,a.kt)("li",{parentName:"ol"},"In the left sidebar, choose ",(0,a.kt)("strong",{parentName:"li"},"Users")," ."),(0,a.kt)("li",{parentName:"ol"},"Select a user to modify, and click on their name to access their details."),(0,a.kt)("li",{parentName:"ol"},"The OIDC Link status will be displayed at the bottom of the page, where you can modify the Link status.")),(0,a.kt)("p",null,"Note: The OIDC Link generated when a user logs in for the first time cannot be unlinked to prevent users from accidentally being unable to log in."),(0,a.kt)("h2",{id:"administrator-privileges-management"},"Administrator privileges Management"),(0,a.kt)("p",null,"In User Management, you can modify a user's administrator privileges. It is important to note that administrators have the ability to modify the administrator privileges of all other administrators, including their own, so caution should be exercised when granting administrator privileges."),(0,a.kt)("p",null,"To modify a user's administrator privileges:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"more")," at the top of the page."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"admin")," option."),(0,a.kt)("li",{parentName:"ol"},"In the left sidebar, choose  ",(0,a.kt)("strong",{parentName:"li"},"Users")," ."),(0,a.kt)("li",{parentName:"ol"},"Select a user to modify and click on the switch in the ",(0,a.kt)("strong",{parentName:"li"},"admin")," column to change their administrator status.")),(0,a.kt)("h2",{id:"ban-a-user"},"Ban a User"),(0,a.kt)("p",null,"Banning a user prevents them from logging into the Horizon system."),(0,a.kt)("p",null,"To ban a user:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"more")," at the top of the page."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"admin")," option."),(0,a.kt)("li",{parentName:"ol"},"In the left sidebar, choose  ",(0,a.kt)("strong",{parentName:"li"},"Users")," ."),(0,a.kt)("li",{parentName:"ol"},"Select a user to ban and click on their name to access their details."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Basic Info")," box, modify the user's banned status.")),(0,a.kt)("p",null,"Note: It is important to carefully consider the consequences of banning a user as it may result in them being unable to access important resources or services. It is recommended to communicate with the user and try to resolve any issues before resorting to a ban."))}u.isMDXComponent=!0}}]);