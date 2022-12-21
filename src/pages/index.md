---
title: Horizon
---

Horizon is a  cloud-native application delivery platform.  The platform team can quickly support  application delivery based on kubernetes with best practice.

Horizon is Inspire by AWS Proton、Gitlab、ArgoCD And Openshift.

The platform team can ensure flexible, secure, and efficient  delivery of application based Horizon tempate system(based on Helm) , RBAC member system and gitops system.

![horizon](/img/template.png)

## FAQs

### Horizon Usage

Within NetEase Cloud Music, the platform team delivers a variety of service template to users based on Horizon, including webserver,  serverless (Knative application), middleware etc. 400+  R&D make hundreds of build and deploy based on Horizon everyday.  now we have make Horizon well meet the need of platfrom team and dev team.

### Why Opensource

In the First, NetEase inc. encourages  us to  open source. On the other hand we think Horizon can help many peoples like us.  If you are interested, you can contact us and give it a try.

### Horizon GitOps

GitOps is a best practice of application delivery,  Horizon Follow GitOps Best Practice. We use Git to make  every change of application stable, reliable, secure, auditable, and rollbackable.

### Horizon vs ArgoCD

ArgoCD is a great tool  for the kubernetes platform team or users that familiar with kubernetes, actually  we use argocd as the gitops engine of horizon. But we think it is not very user-friendly for the application developer team. We make Horizon more user-friendly  by  core modules like group、member & rbac system、service template and so on.

### Horizon vs AWS Proton

some concepts of Horizon are derived from AWS Proton, such as the Template system, and some UI design . AWS Proton support create  environment through IAC（Infrastructure as code), and  delivery  service by choose service template. The main goal of Horizon at the current stage is just application Management on top of Kubernetes.

### Horizon vs OpenShift

We think both Horizon and  Openshift  solve the same problem. They all give you the ability to build、deploy and run applicaitions in kubernetes.  But they looks  fundamently  different, this mainly because openshift is more a extension and enhancement of kubernetes, but now horizon is just a  application  delivery platform based on kubernetes.
