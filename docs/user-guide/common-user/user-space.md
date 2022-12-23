# User Space

User Space is a place where you can manage all of your personal belongings.

## Profile

In your profile, you can view your basic information, the status of your OIDC link, and a list of your resources such as applications, clusters, and templates.

### Basic Info

The basic information section of your profile displays your name, email address, phone number, and account status such as whether you are an administrator or if your account is banned.

### OIDC Link

In this area, you can manage your OIDC Link. If your account is linked to an identity provider (idP), you can log in using that idP.

Currently, Horizon does not support manual registration. If you log in with an idP using OIDC for the first time, you will be automatically registered.

Note that once you are registered with an idP, it **cannot** be unlinked.

### Resources

In the resources area, you can view your applications, clusters, and templates.
If any other resources are added in the future, they will also appear in this area.

## Personal Access Token

With a personal access token, you could access corresponding apis.

### Create a personal access token

To create as many personal access tokens as you need, follow these steps:

1. Click on your avatar in the top-right corner of the screen.
2. Select **"Personal Space"**.
3. On the left sidebar, choose **"Personal Access Token"**.
4. Enter a name for the token and specify an optional expiration date if desired.
5. Select the [desired scopes](#personal-access-token-scopes) for the token.
6. Click **"Add"**.

Remember to store the personal access token in a secure location because you will not be able to access it again after leaving the page.

### Revoke a personal access token

To revoke a personal access token at any time, follow these steps:

1. Click on your avatar in the top-right corner of the screen.
2. Select **"Personal Space"**.
3. On the left sidebar, choose **"Personal Access Token"**.
4. In the "Active project access tokens" area, click **"Delete"** next to the key you wish to revoke.

### Personal access token scopes

A personal access token can perform actions based on the assigned scopes.

|Scope|Access|
|---- |---- |
|`applications:read-only`|Grants read-only access to applications|
|`applications:read-write`|Grants read-write access to applications|
|`clsuters:read-only`|Grants read-only access to clusters|
|`clsuters:read-write`|Grants read-write access to clusters|
|`groups:read-only`|Grants read-only access to groups|
|`groups:read-write`|Grants read-write access to groups|
