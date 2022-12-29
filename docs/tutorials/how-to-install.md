---
title: How to Install
toc_max_heading_level: 6
---

This section describes how to perform a new installation of Horizon.

## Prerequisites

Horizon is built entirely on Kubernetes and has been fully tested on its v1.19.3 release.

We are assuming you have a basic understanding of what the Kubernetes is and how it runs.

You can use [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) to run a local Kubernetes cluster quickly. [Minikube](https://minikube.sigs.k8s.io/docs/) is another highly userful tool to set up a local Kuberentes cluster.

### Hardware

The following table lists the minimum and recommended hardware configurations for deploying Horizon.

| Resource | Minimum | Recommended |
| -------- | ------- | ----------- |
| CPU      | 4 CPU   | 8 CPU       |
| Mem      | 8 GB    | 16 GB       |
| Disk     | 40 GB   | 160 GB      |

### Requirements

* [Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/) cluster version 1.19.3 or later.
* Installed [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) command-line tool.
* Have a [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file (default location is `~/.kube/config`).
* Installed [helm](https://helm.sh/) command-line tool.
* Installed [ingress-nginx](https://github.com/kubernetes/ingress-nginx) or any other ingress controller.

## Installation Process

We use helm to organize Horizon's whole dependencies, which means you can lauch a Horizon instance by simply executing the following command:

```bash
helm install horizon -nhorizon --create-namespace https://github.com/horizoncd/installation/releases/download/${VERSION}/horizon-${VERSION}.tgz
```

Please replace the `<VERSION>` above with the specific version number.

Chart documentation is available in [horizon chart README](https://g.hz.netease.com/music-cloud-native/core-charts/horizon-charts/horizon).

You can use kubectl to check if everything works correctly:

```bash
kubectl get pod -n horizon
kubectl get pod -n tekton-pipelines
```

## Horizon Components

The table below lists the key components that are deployed when you deploy Horizon.

| Component   | Version                                                                        |
| ----------- | ------------------------------------------------------------------------------ |
| Gitlab      | `15.5.1-ce.0`                                                                |
| Argo-cd     | `v2.4.11`                                                                    |
| Tekton      | dashboard:` v0.11.1`<br />pipeline: `v0.18.1`<br />triggers: `v0.11.1` |
| Chartmuseum | `v0.15.0`                                                                    |
| Grafana     | `8.4.6`                                                                      |
| Minio       | `2022.10.29-debian-11-r0`                                                    |
| Redis       | `6.0.7-alpine`                                                               |
| Mysql       | `8.0.31-debian-11-r0`                                                        |
