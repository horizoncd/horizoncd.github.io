---
title: Template
---

## What is Template

A template is a Helm chart that is used by Horizon to create applications in a Kubernetes cluster. When creating a cluster, Horizon retrieves the template from the repository, renders it, and pushes it to the GitOps repository. The resources are then created in the cluster through the Manifest in the GitOps repository.

## Create a Template

1. Click on the **group** option in the top left corner of the page.
2. Enter the group you belong to.
3. Click on the **template** option in the left-side menu.
4. Click on **New template** in the top right corner of the page.
5. Enter the relevant information for the template.
6. Click on  **Submit** .

## Visiable

Templates are generally created by administrators. If a regular user has specific requirements, they can create private templates in their own group.

## Member

Private templates can be managed in terms of permissions. 

If the option to make them visible only to the owner is selected, only the owner can use the template to create applications and clusters.

When determining the user role for a template, Horizon will search for the first role it finds by going up one layer at a time from the current template, and this will be the user's role for that template. Refer to the [Template Specification](/docs/reference/template/specification) for more information on how to create templates.
