---
title: Members
toc_max_heading_level: 6
---

A member indicates what role a user plays under a particular resource, and the role is bound to a collection of permissions that can be quickly expanded and modified by the administrator through the installation configuration.

## Member's permission management

The privileges of a member are determined by the role, and a member with a high privilege role can manage members of the same level or lower privileges.

For example, the owner of a group can add and delete other owner, maintainer, and guest members under the group, and can adjust these members to the role of owner or below. The rank of roles can be configured by the administrator.

## Inheritance and overrides

When a user is not added to the member list of a resource, the user's role under this resource is inherited from the parent resource, and when the user is a direct member of both the child resource and the parent resource, his final role is only related to the child resource.

## Role

The following roles are provided by horizon by default, in descending order:

- PE
- Owner
- Maintainer
- Guest

|                 Action                  | Guest |Maintainer |Owner |PE |
|:---------------------------------------:|:-----:|:---------:|:----:|:-:|
| See a list of groups                    | ✓     | ✓         | ✓    | ✓ |
| Create/edit/transfer groups             |       | ✓         | ✓    | ✓ |
| Link kubernetes                         |       |           | ✓    | ✓ |
| Delete groups                           |       |           | ✓    |   |
| See a list of applications              | ✓     | ✓         | ✓    | ✓ |
| Create/edit/transfer applications       |       |           | ✓    |   |
| Set default region                      |       | ✓         | ✓    | ✓ |
| Delete applications                     |       |           | ✓    |   |
| Create/copy/edit/free clusters          |       | ✓         | ✓    | ✓ |
| Delete clusters                         |       |           | ✓    |   |
| Build/deploy/restart/rollback clusters  |       | ✓         | ✓    | ✓ |
| Online/offline/delete pods              |       | ✓         | ✓    | ✓ |
| See a list of pipelineruns              |       | ✓         | ✓    | ✓ |
| Create/edit/delete tags                 |       | ✓         | ✓    | ✓ |
| Create/delete access tokens             |       | ✓         | ✓    | ✓ |
| Create/edit/delete webhooks             |       |           | ✓    |   |
| Create/edit/delete oauth app            |       |           | ✓    |   |
| See a list of templates                 | ✓     | ✓         | ✓    | ✓ |
| Create/edit/delete template             |       |           | ✓    |   |
| Create/edit/delete template schema tags |       |           |      | ✓ |

In addition, the top-level group needs to be created by an administrator.

The above roles as well as the rank can be modified by the administrator through the installation configuration.
