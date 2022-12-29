---
title: Cluster
toc_max_heading_level: 6
---

## What is a cluster

一个cluster对应了一个gitops仓库，以及k8s上的一系列资源。gitops仓库中储存了渲染template需要的配置，通过[chart dependency](https://helm.sh/docs/helm/helm_dependency/)的方式引用到了相应模板，部署时Horizon调用Argocd从gitops仓库拉取相应配置并渲染template，最后应用到kubernetes中。

所以cluster = gitops repo + kubernetes resources

## Create a Cluster

1. [Create an Application](/docs/user-guide/common-user/application#create-an-application)
2. 进入创建的application
3. 点击右上角的**New cluster**
4. 根据提示填写相应的配置
5. 点击**Submit**
