"use strict";(self.webpackChunkhorizon_docs=self.webpackChunkhorizon_docs||[]).push([[168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Cloud Installation",toc_max_heading_level:6},r=void 0,l={unversionedId:"tutorials/how-to-install/cloud-provider-installation",id:"tutorials/how-to-install/cloud-provider-installation",title:"Cloud Installation",description:"This tutorial shows you how to install Horizon on the cloud provider of your choice, and shows you some details you should be aware of.",source:"@site/docs/tutorials/how-to-install/cloud-provider-installation.md",sourceDirName:"tutorials/how-to-install",slug:"/tutorials/how-to-install/cloud-provider-installation",permalink:"/zh/docs/tutorials/how-to-install/cloud-provider-installation",draft:!1,editUrl:"https://github.com/horizoncd/horizoncd.github.io/blob/master/docs/docs/tutorials/how-to-install/cloud-provider-installation.md",tags:[],version:"current",lastUpdatedBy:"Kiloson",lastUpdatedAt:1689233037,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{title:"Cloud Installation",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Local Installation",permalink:"/zh/docs/tutorials/how-to-install/local-installation"},next:{title:"How to deploy your first workload",permalink:"/zh/docs/tutorials/how-to-deploy-your-first-workload"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Install Horizon",id:"install-horizon",level:2},{value:"Install by Helm",id:"install-by-helm",level:3},{value:"Registry",id:"registry",level:4},{value:"Domain",id:"domain",level:5},{value:"Edit Resolv.conf",id:"edit-resolvconf",level:6},{value:"Edit Hosts",id:"edit-hosts",level:6},{value:"Insecure",id:"insecure",level:5},{value:"Docker",id:"docker",level:6},{value:"Containerd",id:"containerd",level:5}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial shows you how to install ",(0,a.kt)("inlineCode",{parentName:"p"},"Horizon")," on the cloud provider of your choice, and shows you some details you should be aware of."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, make sure you have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster, whose nodes we can connect to using ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," command-line tool installed and configured to connect to your cluster."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"helm")," command-line tool installed and configured to connect to your cluster.")),(0,a.kt)("h2",{id:"prepare"},"Prepare"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check your Kubernetes version, and make sure it is in the range of ",(0,a.kt)("inlineCode",{parentName:"li"},"1.19.3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.24.7"),"."),(0,a.kt)("li",{parentName:"ol"},"Check if Kubernetes has a default storage class. If it doesn't, you should set a default storage class."),(0,a.kt)("li",{parentName:"ol"},"Check if the default storage class has a capacity limit and make sure that a minimum of 20Gi capacity is requested when creating a persistent volume."),(0,a.kt)("li",{parentName:"ol"},"Check if these's an ingress controller in your cluster. If not, you should install one. Please refer to ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/deploy"},"Ingress Controller Installation")," for more details.")),(0,a.kt)("h2",{id:"install-horizon"},"Install Horizon"),(0,a.kt)("p",null,"Installing by script is not recommended in production environment. We will install Horizon manually in this tutorial."),(0,a.kt)("h3",{id:"install-by-helm"},"Install by Helm"),(0,a.kt)("p",null,"Firstly, add the Horizon repository to Helm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add horizoncd https://horizoncd.github.io/helm-charts\n")),(0,a.kt)("p",null,"Then, install Horizon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install horizon horizoncd/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"Alibaba Cloud")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Tencent Cloud"),", its default storage class requiring that PV created should have a minimum of 20Gi capacity. So you need set all the ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"20Gi")," before installing Horizon."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install horizon horizoncd/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \\\n--set mysql.primary.persistence.size=20Gi \\\n--set gitlab.persistence.size=20Gi \\\n--set harbor.persistence.persistentVolumeClaim.databse.size=20Gi \\\n--set harbor.persistence.persistentVolumeClaim.jobservice.size=20Gi \\\n--set minio.persistence.size=20Gi \\\n--set harbor.persistence.persistentVolumeClaim.database.size=20Gi\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your cluster couldn't access docker hub, you could use our mirror registry to pull the images."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install horizon horizoncd/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \\\n-f https://raw.githubusercontent.com/horizoncd/helm-charts/main/horizon-cn-values.yaml\n"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tags.minimal")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tags.full")," are used to control which components will be installed. In production environment, installing all components is recommended. So you should set ",(0,a.kt)("inlineCode",{parentName:"p"},"tags.minimal=false")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tags.full=true"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In production environment, you should use a net-based storage class for ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GitLab"),". Otherwise, the data will be lost when the pod is rescheduled to another node. Or you cloud just deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GitLab")," on a dedicated machine.")),(0,a.kt)("h4",{id:"registry"},"Registry"),(0,a.kt)("h5",{id:"domain"},"Domain"),(0,a.kt)("p",null,"Installation will bring up a registry service, which is used to store the images of the applications. The registry service is based on ",(0,a.kt)("a",{parentName:"p",href:"https://goharbor.io/"},"Harbor"),"."),(0,a.kt)("p",null,"Horizon will push the image of the application to the registry service. When deploying a new application instance, Kubernetes will pull the image of the application from the registry service. So Kubernetes' CRI should be able to resolve the registry service's domain name. There's two ways to do this."),(0,a.kt)("h6",{id:"edit-resolvconf"},"Edit Resolv.conf"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDNS")," as the DNS server, you can edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"resolv.conf")," file of the host machine to add the registry service's domain name for all kubernetes nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# On Kubernetes Nodes\nDNS_IP=`kubectl get service -n kube-system kube-dns -o jsonpath='{.spec.clusterIP}'`\n\necho \"nameserver $DNS_IP\" | tee /etc/resolv.conf\n")),(0,a.kt)("h6",{id:"edit-hosts"},"Edit Hosts"),(0,a.kt)("p",null,"You could also edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file of all kubernetes nodes to add the registry service's domain name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# On Kubernetes Nodes\nSVC_IP=`kubectl get services -n horizoncd horizon-registry -ojsonpath="{.spec.clusterIP}"`\n\necho "$SVC_IP horizon-registry.horizoncd.svc.cluster.local" | tee -a /etc/hosts\n')),(0,a.kt)("h5",{id:"insecure"},"Insecure"),(0,a.kt)("p",null,"The bundled Harbor uses a self-signed certificate. When Kubernetes runtime tries to pull the image from the registry service, it will fail because of the certificate. So you should tells the runtime using the ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure registry")," to make the registry service use an insecure connection."),(0,a.kt)("h6",{id:"docker"},"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# On Kubernetes Nodes\necho \'{\n  "insecure-registries" : ["horizon-registry.horizoncd.svc.cluster.local"]\n}\' | tee /etc/docker/daemon.json\n\nsystemctl restart docker\n')),(0,a.kt)("h5",{id:"containerd"},"Containerd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# On Kubernetes Nodes\necho \'[plugins."io.containerd.grpc.v1.cri".registry.configs."horizon-registry.horizoncd.svc.cluster.local".tls]\n  insecure_skip_verify = true\' | tee -a /etc/containerd/config.toml\n\nsystemctl restart containerd\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you have any questions about Horizon, you could contact us directly. Contact information can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/horizoncd/horizon"},"github repository"),"."),(0,a.kt)("h3",{parentName:"admonition",id:"horizon-domain"},"Horizon Domain"),(0,a.kt)("p",{parentName:"admonition"},"Horizon use ingress to expose the service. So you should set a domain name for Horizon. You can set it by ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress.hosts[0]=<horizon-domain>"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install horizon horizon/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \\\n--set ingress.hosts[0]=<horizon-domain> \\\n--set argo-cd.server.ingress.hosts[0]=<argocd-domain> \\\n--set gitlab.ingress.hosts[0]=<gitlab-domain> \\\n--set gitlab.config.GITLAB_HOST=<gitlab-domain>\n")),(0,a.kt)("p",{parentName:"admonition"},"After setting the domain name, you should access Horizon by ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<horizon-domain>"),", then follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/how-to-deploy-your-first-workload"},"How to Deploy Your First Workload")," tutorial to make further operations.")))}u.isMDXComponent=!0}}]);