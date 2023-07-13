---
title: Access Token
toc_max_heading_level: 6
---

An access token is an access credential with a specific scope and role that helps you authenticate when calling an horizon API. You can create it quickly, revoke it, or let it expire automatically by setting an expiration time. You can integrate it into CI or scripts when you need to invoke the Horizon interface.

Horizon offers two types of access tokens：

* Resource Access Token：can only be used to access a specific resource and its sub-resources
* Personal Access Token：can be used to access all resources owned by yourself.

The two differ only slightly in the scope of resources authorized, let's take the example of creating a resource access token and see how to use it.

## Create a resource access token

On the Resource Home page, you can create it in Settings->Access Token, which contains the following：

- name：token name is used to distinguish different tokens
- expiration date：the token expiration time, only supports to days dimension, if not filled, the token will never expire.
- role：the same to role of member。
- scopes：a collection of permissions that restrict the types of resources a token can access.

After creation, the token and copy button will appear below the "Add" button, and you can also see the basic information of the token you just generated in the "Active project access tokens" list.

You need to save the accesss token as soon as possible, once the page is refreshed, the token content will no longer be visible.

## Scope vs Role

Both are used to restrict the resources that the access token can access, and the final permission of the token depends on the intersection of the two.

scope is an attribute of access token while role is an attribute of member. We require that the token must be associated with a certain user, so when a resource access token is created, a bot account and member are created with it and bound to the specified role.

## Default scopes

The following scopes are provided by horizon by default:

| Scope                   | Action                                                    |
| ----------------------- | --------------------------------------------------------- |
| groups:read-only        | Read-only permissions for groups and subresources.        |
| groups:read-write       | Read-write permissions for groups and subresources.       |
| applications:read-only  | Read-only permissions for applications and subresources.  |
| applications:read-write | Read-write permissions for applications and subresources. |
| instances:read-only      | Read-only permissions for instances and subresources.      |
| instances:read-write     | Read-write permissions for instances and subresources.     |

## Expireation and revoke

On the right side of the token list, click "delete" to destroy it. If you specify an expiration time when creating a token, the token will not be available for further use after the specified date.

## Token Usage

You can refer to How to use horizon api
