"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[332],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"Monitor",toc_max_heading_level:6},i=void 0,s={unversionedId:"user-guide/common-user/monitor",id:"user-guide/common-user/monitor",title:"Monitor",description:"Observability of cloud native usually includes logs, metrics, and traces. Logs and traces are not within the scope of this article. Let's see what abilities Horizon provides for Monitoring(metrics).",source:"@site/docs/user-guide/common-user/monitor.md",sourceDirName:"user-guide/common-user",slug:"/user-guide/common-user/monitor",permalink:"/docs/user-guide/common-user/monitor",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/user-guide/common-user/monitor.md",tags:[],version:"current",lastUpdatedBy:"tom",lastUpdatedAt:1673946872,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{title:"Monitor",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Deploy and Manage Pods",permalink:"/docs/user-guide/common-user/deploy-and-pod-management"},next:{title:"Members",permalink:"/docs/user-guide/common-user/member"}},l={},u=[{value:"Usage",id:"usage",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Observability of cloud native usually includes logs, metrics, and traces. Logs and traces are not within the scope of this article. Let's see what abilities Horizon provides for Monitoring(metrics)."),(0,n.kt)("p",null,"Horizon is a standardized cloud native delivery platform, so it is natural for us to choose the Prometheus monitoring stack as the foundation of our monitoring capabilities. Horizon itself does not deliver the Prometheus monitoring stack, so users need to deploy Prometheus in advance. We recommend using ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus-operator.dev/"},"prometheus-operator")," to deliver the Prometheus monitoring stack in a declarative manner, which will integrate well with Horizon's template system."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"We have built several monitoring dashboards with best practice based on ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," for users to quickly experience and use. Next, let's see how to use it."),(0,n.kt)("p",null,"Enter the monitoring dashboard for a particular cluster."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select a cluster from the cluster list page."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring")," from its menus.")),(0,n.kt)("p",null,"The following dashboards will be shown\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pod")," - Resources monitor at the pod level."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitor")," - Resources monitor at the container level."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Serverless")," - If the load is delivered based on Knative, this dashboard can be used.")),(0,n.kt)("p",null,"The following time periods are available for selection\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1h"),(0,n.kt)("li",{parentName:"ul"},"3h"),(0,n.kt)("li",{parentName:"ul"},"6h"),(0,n.kt)("li",{parentName:"ul"},"12h"),(0,n.kt)("li",{parentName:"ul"},"1day"),(0,n.kt)("li",{parentName:"ul"},"3day"),(0,n.kt)("li",{parentName:"ul"},"custom - Customize the start and end of the time period.")),(0,n.kt)("p",null,"'Auto refresh' is also supported with the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Close - Means closing the 'Auto refresh'."),(0,n.kt)("li",{parentName:"ul"},"30s"),(0,n.kt)("li",{parentName:"ul"},"1 min"),(0,n.kt)("li",{parentName:"ul"},"5 min")),(0,n.kt)("p",null,"These standard monitoring dashboards can meet basic observability needs. If you have further monitoring needs, you can contact your administrator to easily add more monitoring dashboards."))}m.isMDXComponent=!0}}]);