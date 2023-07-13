---
title: Group
toc_max_heading_level: 6
---

## Groups
Groups provide a logical grouping of applications from multiple teams, which provide the following features: 
* defining templates in group to deploy custom applications
* defining group member roles to provide group, application and application instance RBAC
* managing access tokens for the resources that need access to the Horizon CD API
* managing Oauth apps that can use Horizon as an OAuth provider
* providing other advanced features (e.g. migration, linking to kubernetes etc...)


## Create groups
> **Note that** only administrators can create root groups.

1. Click **Groups** tab at the top navigation, and select and click to the parent group where you want to create a group. 
2. Click **New subgroup** to create you own group. 
Now, you can manage your group!

## Edit groups

From the group page, click on **Settings** in the left sidebar and select **General** to edit your groups. 

## Advance
From the group page, click on **Settings** in the left sidebar and select **Advance** to use advanced features. 

### Transfer groups
You can transfer the group to another group, where your role should be no less than Maintainer. 

### Link kubernetes
Groups can bound kubernetes which is used to deploy your applications by tags. See [kubernetes](../administrator/kubernetes.md) for More information. 

### Delete groups
When there is no application or application instance under the group, you can delete it. 