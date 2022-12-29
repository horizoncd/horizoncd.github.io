---
title: Cluster
toc_max_heading_level: 6
---

## What is a cluster

A cluster corresponds to a GitOps repository and a series of resources on Kubernetes. The GitOps repository stores the configuration needed to render the templates, and the templates are referenced through [chart dependencies](https://helm.sh/docs/helm/helm_dependency/). When deploying, Horizon uses Argocd to pull the relevant configuration from the GitOps repository and render the templates, which are then applied to Kubernetes.

Therefore, a cluster is equal to a GitOps repository + Kubernetes resources.

## Create a Cluster

1. [Create an Application](/docs/user-guide/common-user/application#create-an-application)
2. Enter the application you created.
3. Click on **New cluster** in the top right corner.
4. Fill in the required configuration according to the prompts.
5. Click on **Submit**.

## Management

For more management operations, please refer to [Deploy and Pod Management](/docs/user-guide/common-user/deploy-and-pod-management)
