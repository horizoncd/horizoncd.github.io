---
title: How to deploy your first workload
toc_max_heading_level: 6
---

This section describes how to deploy your first workload step by step. You can check out the demo video for a overview of Horizon CD.

**Bibili**
<iframe src="//player.bilibili.com/player.html?aid=307659880&bvid=BV1fA411Z7GT&cid=963860081&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="95%" height="600"> </iframe>

**Youtube**
<iframe width="560" height="315" src="https://www.youtube.com/embed/6TRoxUPvnx0&hd=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen width="95%" height="600"></iframe>

## 1. Login Horizon CD

The initial password for the admin account is auto-generated when you perform the installation. Using the email `admin@cloudnative.com` and the password, login to Horizon CD.

1. Open Horizon CD's home page in your browser and click on **Login**.
   ![home](/image/home.png)
2. Enter the email and password to log in.
   ![password-login](/image/password-login.png)

> Now, you need create some **required system resources** to set up your devops platform. 

## 2. Create a registry

1. Click on the **More** option in the top of the home page and select **Admin**.
2. Click on the **Registries** option in the left-side menu.
3. Click **Add registry** to enter the page below. Fill in the registry information below and click **Submit** to add it.
   ![new-harbor-demo](/image/new-harbor-demo.png)

The configurations is as follows:

| Name     | local                                      |
| -------- | ------------------------------------------ |
| Server   | https://harbor.horizoncd.svc.cluster.local |
| Path     | library                                    |
| Token    | YWRtaW46SGFyYm9yMTIzNDU=                   |
| Skip TLS | Yes                                        |
| Type     | harbor                                     |

## 3. Create a kubernetes cluster

1. Click on the **More** option in the top of the home page and select **Admin**.

2. Click on the **Kubernetes** option in the left-side menu.

3. Click **Add kubernetes** to enter the page below.
   ![new-k8s](/image/new-k8s.png)
   
   :::tip
   
   If your `kubernetes` is deployed by `Kind`, docker login kind node to get the kubeconfig, the kubeconfig is under kind node's filesystem, file location: `/etc/kubernetes/admin.conf`.
   
   :::

4. Fill in your kubernetes information and click **Submit** to add it.

5. Then, enter your kubernetes page, click **Add tags** to add a specific tag which is used to link your group and kubernetes. For example:
   ![k8s-tags](/image/k8s-tags.png)

6. Click **Submit** to add the tag.

## 4. Create an environment

1. Click on the **More** option in the top of the home page and select **Admin**.
2. Click on the **Environments** option in the left-side menu.
3. Click **New environment** to enter the creation page.
   ![new-env](/image/new-env.png)
4. Fill in your kubernetes information and click **Submit** to create the environment.
5. Finally, enter your environment page, click **Link kubernetes** to link the kubernetes you just added.
   ![env-link-k8s](/image/env-link-k8s.png)

## 5. Create a template

A template is required to hold build and deploy configurations of your applications. Now, let's create a public template: 

1. Click on the **Templates** tab in the top of the home page.

2. Select **Public templates** and click on **New template** in the top right corner of the page.
   ![new-template](/image/new-template.png)

3. Enter the relevant information for the template.
   
   > Note that **Git repo** is the clone link of the template, through which Horizon pulls it. A sample template of deployment workload (https://github.com/horizoncd/deployment.git) is provided to you to deploy your first workload. You can use it as shown below:
   > ![new-template-demo1](/image/new-template-demo1.png)
   > ![new-template-demo2](/image/new-template-demo2.png)

4. Click on **Submit**.

## 6. Create a group

Now create and administer a new group:

1. Click on the **Groups** tab in the top of the home page.
2. Click **New group** to create you own group.
3. Groups need bound kubernetes which is used to deploy your applications by tags. Now, link kubernetes resources to your new group: 
   1. Enter your group page, click on **Settings** in the left sidebar and select **Advance**.
   2. click on **Add tags** and fill in the tag your kubernetes holds.

## 7. Create an application

1. From the group page, click **New application** button to start to create a new application.

2. Fill some basic information of your application and click **Next**.
   
   > A sample application git repository (https://github.com/horizoncd/springboot-source-demo.git) is provided. You can use it as shown below:
   > ![new-app-demo1](/image/new-app-demo1.png)

3. Select **dockerfile** build type and fill `Dockerfile` in dockerfile path. Then click **Next**.
   ![new-app-demo2](/image/new-app-demo2.png)

4. Select your template and fill your deploy configurations.
   ![new-app-demo3](/image/new-app-demo3.png)

5. Click **Next** and audit your configurations.

6. Click **Submit** to create it.

## 8. Create a cluster

1. From the application page, click **New cluster** button to start to create a new cluster.
2. Select environment and region where you want to deploy the cluster.
3. Click **Next** and **Submit** to create it.

## 9. Deploy your cluster

Now, it is the last step to deploy your first workload!

1. From the cluster page, click **Build and deploy** button
2. Select your git reference and check the differences from the last revision.
3. Click **Submit** button to confirm the build and deploy.
4. Check the pipeline's log and cluster status.
5. When the cluster status is **healthy**, your first `deployment` workload is successfully deployed on kubernetes!
   ![cluster-builddeploy](/image/cluster-builddeploy.png)
