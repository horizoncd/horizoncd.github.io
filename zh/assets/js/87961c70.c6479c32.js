"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Webhook",toc_max_heading_level:6},l=void 0,i={unversionedId:"user-guide/common-user/webhook",id:"user-guide/common-user/webhook",title:"Webhook",description:"Webhooks are custom HTTP callbacks that you define. They are usually triggered by an event, such as creating a new cluster or triggering a new deploy task. For example, you can use webhooks to:",source:"@site/docs/user-guide/common-user/webhook.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/webhook",permalink:"/zh/docs/user-guide/common-user/webhook",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/webhook.md",tags:[],version:"current",lastUpdatedBy:"Kiloson",lastUpdatedAt:1686812074,formattedLastUpdatedAt:"2023\u5e746\u670815\u65e5",frontMatter:{title:"Webhook",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Oauth 2.0 Application",permalink:"/zh/docs/user-guide/common-user/oauth-app"},next:{title:"User Space",permalink:"/zh/docs/user-guide/common-user/user-space"}},s={},u=[{value:"Events",id:"events",level:2},{value:"Create a webhook",id:"create-a-webhook",level:2},{value:"View the logs and retry",id:"view-the-logs-and-retry",level:2},{value:"Headers and Payload example",id:"headers-and-payload-example",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Webhooks are custom HTTP callbacks that you define. They are usually triggered by an event, such as creating a new cluster or triggering a new deploy task. For example, you can use webhooks to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trigger other systems, such as starting a test when the deploy task started."),(0,a.kt)("li",{parentName:"ul"},"Send notifications, such as notifying specific people when a cluster is deleted.")),(0,a.kt)("p",null,"You can connect horizon to more external systems through webhook and your custom webhook receivers."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"The following events are supported."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event type"),(0,a.kt)("th",{parentName:"tr",align:null},"Trigger"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"applications_created"),(0,a.kt)("td",{parentName:"tr",align:null},"A new application is created.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"application_deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"An application is deleted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"application_transferred"),(0,a.kt)("td",{parentName:"tr",align:null},"An application is transferred to another group.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster_created"),(0,a.kt)("td",{parentName:"tr",align:null},"A new cluster is created.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster_deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"A cluster is deleted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters_builddeployed"),(0,a.kt)("td",{parentName:"tr",align:null},"A cluster has completed a build task and triggered a deploy task.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters_deployed"),(0,a.kt)("td",{parentName:"tr",align:null},"A cluster has triggered a deploy task.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters_rollbacked"),(0,a.kt)("td",{parentName:"tr",align:null},"A cluster has triggered a rollback task.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters_freed"),(0,a.kt)("td",{parentName:"tr",align:null},"A cluster has been freed.")))),(0,a.kt)("p",null,'Note: "*" indicates that you want to follow any event.'),(0,a.kt)("h2",{id:"create-a-webhook"},"Create a webhook"),(0,a.kt)("p",null,"In Settings->Webhooks on the group home page, you can view the list of created webhooks and create a new webhook."),(0,a.kt)("p",null,"Webhooks contain the following configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL: URL of the webhook endpoint. The URL must be percent-encoded if it contains one or more special characters."),(0,a.kt)("li",{parentName:"ul"},"Enable ssl verify: Whether to enable ssl verification when the url schema is HTTPS."),(0,a.kt)("li",{parentName:"ul"},"Description: Description of your webhook."),(0,a.kt)("li",{parentName:"ul"},"Secret: Secret Token of your custom webhook receiver."),(0,a.kt)("li",{parentName:"ul"},"Triggers: Events to trigger the webhook.")),(0,a.kt)("p",null,'Click "submit" to complete the creation, you can see some basic information of the newly created webhook in the webhook list, and through the "operations" column to edit, delete webhook and view logs.'),(0,a.kt)("h2",{id:"view-the-logs-and-retry"},"View the logs and retry"),(0,a.kt)("p",null,'Click "View logs" on the right side of the webhook list to enter the logs list page, you can see the logs of this webhook, click "id" to enter the log details page, where you can view the request header, request body, response header, response body information of this trigger record.'),(0,a.kt)("p",null,'If the webhook fails to send, you can resend it via the "resend" button in the upper right corner.'),(0,a.kt)("h2",{id:"headers-and-payload-example"},"Headers and Payload example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Content-Type: application/json;charset=utf-8\nX-Horizon-Webhook-Secret: "secret"\n\n{\n    "eventID": 1,\n    "webhookID": 1,\n    "application": {\n        "id": 1,\n        "name": "test",\n        "priority": "P0"\n    },\n    "eventType": "applications_created",\n    "user": {\n        "id": 1,\n        "name": "test",\n        "email": "test@noreply.com"\n    }\n}\n')))}d.isMDXComponent=!0}}]);