---
title: Application
toc_max_heading_level: 6
---

## Applications
An application is defined as a set of application instances and provide default configurations for the application instances created under it. The following features about applications are provide: 
* defining application member roles to provide application and application instance RBAC
* providing statistics of pipelines
* providing webhook to notify external systems
* managing access tokens for the resources that need access to the Horizon CD API


## Create applications
From the group page, you can click **New application** button to create a new application. The following table illustrates the application parameters: 

|    Parameter     |                                    Description                                   | Note |
|:----------------:|:--------------------------------------------------------------------------------:|:----:|
|       Name       |                   An unique name identifier for the application                  |      |
|   Description    |                        The description for the application                       |      |
|     Priority     |                The priority of application instance in kubernetes                |      |
|     Git URL      |                         The git repository of source code                        |      |
|   Git revision   |              The git reference, which can be branch, tag and commit              |      |
|  Git subfolder   | Optional subdirectory for the source code, used as a context directory for build |      |
|   Build config   |     Build configurations, where you can select build type and other settings     |      |
| Deploy template  |                  Deploy template, where you can select workload                  |      |
| Template release |                  Deploy template, where you can select workload                  |      |
| Template config  |            Template configurations, such as health check, target port            |      |


## Edit applications

**For basic information:**
1. click on **Details** in the sidebar from the application page;
2. select **Edit** above to change application settings.

**For configurations of specific environment:**
1. click on **Details** in the sidebar from the application page;
2. select environment in the dropdown in **Application configs** card, then click **Edit** to do changes.


## Transfer applications
You can transfer the applications to another group, where your role should be no less than Maintainer. 
1. click on **Settings -> Advance** in the sidebar from the application page;
2. select a target group and click **Transfer**.


## Set default region
You can configure the default region for different environments. When you create a application instance for a environment, the default region for the environment is automatically populated.
1. click on **Settings -> Advance** in the sidebar from the application page;
2. select region for environment in the dropdown and click **Submit**.


## Delete applications
When there is no application instance in the application, you can delete it. 
1. click on **Details** in the sidebar from the application page;
2. click **More -> Delete** above to delete your application.