---
title: Cluster
toc_max_heading_level: 6
---

## Clusters
A cluster is a deployment instance of the application in the Horizon context. You can deploy your cluster to various environments (e.g. online, test etc...) and regions. The cluster inherits the configuration of the application, and of course, you can modify most of the configuration and grant different permissions of the cluster to different members. The following features are provide: 
* viewing pipeline histories and details
* providing rich monitoring abilities


## Create clusters
From the application page, you can click **New cluster** button to create a new cluster. The following table illustrates the additional parameters of clusters over applications: 

|  Parameter  |                                    Description                                   | Note |
|:-----------:|:--------------------------------------------------------------------------------:|:----:|
| Environment |              Environment is a logical concept of associated regions              |      |
|   Region    |    Region refers to the deployment destination for applications and clusters     |      |
|  Duration   |   The duration of the cluster, the expired cluster will be automatically freed   |      |


## Copy clusters
From the application page, you can select a cluster and click **Copy cluster** button to duplicate it. You can also edit the cluster parameters when copying clusters.


## Edit clusters
1. click into your cluster in the application page
2. click on **More** and select **Edit** on the right side of the cluster page
3. do and submit your changes.


## Delete clusters
1. click into your cluster in the application page
2. click on **More** and select **Delete** on the right side of the cluster page
3. confirm your deletion.
> **Note that** clusters cannot be deleted until they are freed.