"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"Template Specification",toc_max_heading_level:6},o=void 0,i={unversionedId:"reference/template/specification",id:"reference/template/specification",title:"Template Specification",description:"Helm Chart",source:"@site/docs/reference/template/specification.md",sourceDirName:"reference/template",slug:"/reference/template/specification",permalink:"/zh/reference/template/specification",draft:!1,editUrl:"https://github.com/horizoncd/docs/blob/master/docs/docs/reference/template/specification.md",tags:[],version:"current",lastUpdatedBy:"closetool",lastUpdatedAt:1673594694,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"Template Specification",toc_max_heading_level:6},sidebar:"docs",previous:{title:"apis",permalink:"/zh/reference/api/apis"}},s={},c=[{value:"Helm Chart",id:"helm-chart",level:2},{value:"Files in Template",id:"files-in-template",level:3},{value:"templates, values.yaml, and Chart.yaml",id:"templates-valuesyaml-and-chartyaml",level:2},{value:"schema",id:"schema",level:2},{value:"output",id:"output",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"helm-chart"},"Helm Chart"),(0,n.kt)("p",null,"Horizon Templates are based on Helm Charts, so it is important to have a basic understanding of ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"Helm Charts")," before proceeding."),(0,n.kt)("h3",{id:"files-in-template"},"Files in Template"),(0,n.kt)("p",null,"Below is a description of the files found in a Horizon Template."),(0,n.kt)("h2",{id:"templates-valuesyaml-and-chartyaml"},"templates, values.yaml, and Chart.yaml"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#template-files"},"templates"),", ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#values-files"},"values.yaml"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"},"Chart.yaml")," are equivalent to their counterparts in a Helm Chart."),(0,n.kt)("p",null,"In theory, all files in a Helm Chart can be included in a Horizon Template, but generally only templates, values.yaml, and Chart.yaml are needed."),(0,n.kt)("h2",{id:"schema"},"schema"),(0,n.kt)("p",null,"The schema directory contains ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-formhttps://json-schema.org/"},"react-jsonschema-form")," files, which are used by Horizon to render a form when creating an application or cluster. The form collects user input, which is used as the values to render the chart and generate the final manifest file for deployment to Kubernetes."),(0,n.kt)("h2",{id:"output"},"output"),(0,n.kt)("p",null,"The output directory contains rendered templates that are displayed on the cluster details page after deployment. It is commonly used to output the cluster's ingress domain."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example outputting the ingress domain"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},'{{- if (.Values.app.advanced.ingress.enabled | default false) }}\ndomain:\n  description: the domain for the cluster\n  value: {{ template "ingress.host" . }}\n{{- end -}}\n'))))}m.isMDXComponent=!0}}]);