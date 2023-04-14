"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[52],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Oauth 2.0 Application",toc_max_heading_level:6},l=void 0,i={unversionedId:"user-guide/common-user/oauth-app",id:"user-guide/common-user/oauth-app",title:"Oauth 2.0 Application",description:"You can use Horizon as an OAuth 2.0 authentication identity provider by following steps:",source:"@site/docs/user-guide/common-user/oauth-app.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/oauth-app",permalink:"/docs/user-guide/common-user/oauth-app",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/oauth-app.md",tags:[],version:"current",lastUpdatedBy:"xu.zhu",lastUpdatedAt:1681459998,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{title:"Oauth 2.0 Application",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Template",permalink:"/docs/user-guide/common-user/template"},next:{title:"Webhook",permalink:"/docs/user-guide/common-user/webhook"}},u={},p=[{value:"Create group owned applications",id:"create-group-owned-applications",level:2},{value:"Supported OAuth 2.0 flows",id:"supported-oauth-20-flows",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use Horizon as an OAuth 2.0 authentication identity provider by following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating oauth applications: currently only group level oauth applications are supported, and only group owners are supported to create."),(0,a.kt)("li",{parentName:"ol"},"Your server should support oauth 2.0\uff1aIn case the token is not passed, does not exist or expires, the third-party server needs to exchange the token with the user's authorization.")),(0,a.kt)("h2",{id:"create-group-owned-applications"},"Create group owned applications"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to your group, click "New application" button in Settings->Developer.'),(0,a.kt)("li",{parentName:"ol"},"Enter a name, homepage URL, description and authorization callback URL. The callback URL is the URL where users are sent after they authorize with Horizon."),(0,a.kt)("li",{parentName:"ol"},'Select  "Create". You can get OAuth 2 Client ID in the "clientID" field.'),(0,a.kt)("li",{parentName:"ol"},"Click on the application name, you can edit the application, as well as get the server-side secret key for token exchange. Remember to save the secret key, you can't see it next time.")),(0,a.kt)("h2",{id:"supported-oauth-20-flows"},"Supported OAuth 2.0 flows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When the user does not pass a token, or when the passed token is invalid\uff0cthe server needs to return a 302 code that redirects the client to the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET https://horizon/login/oauth/authorize?client_id=client_id&redirect_uri=redirect_uri&scope=scope&state=state\n")),(0,a.kt)("p",null,"The parameters are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The client id you received from Horizon after you create the oauth app.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The URL in the application that the user is sent to after being authorized. ",(0,a.kt)("br",null),"Must match the callback URL of oauth app..")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional.",(0,a.kt)("br",null),"A list of scopes separated by spaces.",(0,a.kt)("br",null),"Supported scopes can be found at xxx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"state"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"Non-guessable random string, which is used to prevent CSRF attack.")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"If the user authorizes your request, Horizon will redirect back to your site with a code in the query parameter, which will expire in 10 minutes. You can use code to exchange for a token by the following API\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST https://horizon.com/login/oauth/access_token?client_id=&client_secret=&code=&redirect_uri=\n")),(0,a.kt)("p",null,"The parameters are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nane"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The client id you received from Horizon when you registered the oauth app.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The client secret you received from Horizon after you create the oauth app.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The code you received from Horizon after\xa0the user authorizes your request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required.",(0,a.kt)("br",null),"The URL that the user is sent to after being authorized.")))),(0,a.kt)("p",null,"The response body is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n  "access_token":"$accessToken",\n  "scope":"",\n  "token_type":"bearer"\n  "expire_in": "3600"\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"How to use token")),(0,a.kt)("p",null,"You can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/api/use-the-apis"},"Using the API")))}c.isMDXComponent=!0}}]);