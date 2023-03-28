---
title: Local Installation
toc_max_heading_level: 6
---

This tutorial shows you how to install `Horizon` on the cloud provider of your choice, and shows you some details you should be aware of.

## Prerequisites

Before you begin, make sure you have the following:

- A Kubernetes cluster, whose nodes we can connect to using `ssh`.
- The `kubectl` command-line tool installed and configured to connect to your cluster.
- The `helm` command-line tool installed and configured to connect to your cluster.

## Prepare

1. Check your Kubernetes version, and make sure it is in the range of `1.19.3` to `1.24.7`.
2. Check if Kubernetes has a default storage class. If it doesn't, you should set a default storage class.
3. Check if the default storage class has a capacity limit and make sure that a minimum of 20Gi capacity is requested when creating a persistent volume.
4. Check if these's a ingress controller in your cluster. If not, you should install one. Please refer to [Ingress Controller Installation](https://kubernetes.github.io/ingress-nginx/deploy) for more details.

## Install Horizon

Installing by script is not recommended in production environment. We well install Horizon manually in this tutorial.

### Install by Helm

Firstly, add the Horizon repository to Helm:

```bash
helm repo add horizon https://openhorizon.github.io/helm-charts
```

Then, install Horizon:

```bash
helm install horizon horizon/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true
```

The `tags.minimal` and `tags.full` are used to control which components will be installed. In production environment, installing all components is recommended. So you should set `tags.minimal=false` and `tags.full=true`.

In `Alibaba Cloud` or `Tencent Cloud`, its default storage class requiring that PV created should have a minimum of 20Gi capacity. So you need set all the `storage` to `20Gi` before installing Horizon.

```bash
# helm install horizon horizon/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \
--set mysql.primary.persistence.size=20Gi \
--set gitlab.persistence.size=20Gi \
--set harbor.persistence.persistentVolumeClaim.databse.size=20Gi \
--set harbor.persistence.persistentVolumeClaim.jobservice.size=20Gi \
--set minio.persistence.size=20Gi \
--set harbor.persistence.persistentVolumeClaim.database.size=20Gi
```

If your cluster couldn't access docker hub, you should use our mirror registry to pull the images.

```bash
# helm install horizon horizon/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \
-f https://raw.githubusercontent.com/horizoncd/helm-charts/main/horizon-cn-values.yaml
```

#### Registry

##### Domain

Installation will bring up a registry service, which is used to store the images of the applications. The registry service is based on [Harbor](https://goharbor.io/).

Horizon will push the image of the application to the registry service. When deploying a new cluster, Kubernetes will pull the image of the application from the registry service. So Kubernetes' CRI should be able to resolve the registry service's domain name. There's two ways to do this.

###### Edit Resolv.conf

If you are using `CoreDNS` as the DNS server, you can edit the `resolv.conf` file of the `coredns` pod to add the registry service's domain name for all kubernetes nodes.

```bash
# On Kubernetes Nodes
DNS_IP=kubectl get service -n kube-system kube-dns -o jsonpath='{.spec.clusterIP}'

echo "nameserver $DNS_IP" | tee /etc/resolv.conf
```

###### Edit Hosts

You could also edit the `/etc/hosts` file of all kubernetes nodes to add the registry service's domain name.

```bash
# On Kubernetes Nodes
SVC_IP=kubectl get services -n horizoncd horizon-registry -ojsonpath="{.spec.clusterIP}"

echo "$SVC_IP horizon-registry.horizoncd.svc.cluster.local" | tee -a /etc/hosts
```

##### Insecure

The bundled Harbor uses a self-signed certificate. When Kubernetes runtime tries to pull the image from the registry service, it will fail because of the certificate. So you should tells the runtime using the `insecure registry` to make the registry service use an insecure connection.

###### Docker

```bash
# On Kubernetes Nodes
echo '{
  "insecure-registries" : ["horizon-registry.horizoncd.svc.cluster.local"]
}' | tee /etc/docker/daemon.json

systemctl restart docker
```

##### Containerd

```bash
# On Kubernetes Nodes
echo '[plugins."io.containerd.grpc.v1.cri".registry.configs."horizon-registry.horizoncd.svc.cluster.local".tls]
  insecure_skip_verify = true' | tee -a /etc/containerd/config.toml

systemctl restart containerd
```

### Horizon Domain

Horizon use ingress to expose the service. So you should set a domain name for Horizon. You can set it by `--set ingress.hosts[0]=<horizon-domain>`.

```bash
# helm install horizon horizon/horizon --namespace horizoncd --create-namespace --set tags.minimal=false,tags.full=true \
--set ingress.hosts[0]=<horizon-domain> \
--set argo-cd.server.ingress.hosts[0]=<argocd-domain> \
--set gitlab.ingress.hosts[0]=<gitlab-domain> \
--set gitlab.config.GITLAB_HOST=<gitlab-domain>
```

After setting the domain name, you should access Horizon by `http://<horizon-domain>`, then follow the [How to Deploy Your First Workload](/docs/tutorials/how-to-deploy-your-first-workload) tutorial to make further operations.
