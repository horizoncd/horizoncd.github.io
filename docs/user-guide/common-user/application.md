---
title: Application
toc_max_heading_level: 6
---
## What is an Application

An application is a set of default configurations for a cluster. Essentially, an application corresponds to a GitOps repository, with different environments corresponding to different branches.

Users can create application configurations for different environments, and if a particular environment is not configured, the default application configurations are used.

When creating a cluster, the cluster inherits the application configuration for the relevant environment.

## Create an Application

1. Click on the **Groups** option at the top of the page.
2. Enter the group where you have Maintainer or higher privileges.
3. Click on **New application** in the top right corner of the page.
4. Select the desired template.
5. Fill in the required information according to the prompts on the page.
6. Click on **Submit** to complete the creation process.

## Transfer an Application

1. Click on the **Applications** option at the top of the page.
2. Enter the application you want to transfer.
3. Click on **Advance** under **Settings** in the left-side menu.
4. Select the group you want to transfer the application to.
5. Click on  **Transfer** .

Note: Only users with Maintainer or higher privileges in the target group can perform this action.

## Member

Refer to [Member](https://chat.openai.com/docs/user-guide/common-user/member) for more information.

## Webhook

Refer to [Webhook](https://chat.openai.com/docs/user-guide/common-user/webhook) for more information.

## Access Token

Refer to [Access Token](https://chat.openai.com/docs/user-guide/common-user/access-token) for more information.
