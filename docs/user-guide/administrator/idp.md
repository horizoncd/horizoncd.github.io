---
title: IDP
toc_max_heading_level: 6
---

An IDP, or Identity Provider, is a service that is responsible for authenticating users in a system that uses the OpenID Connect (OIDC) protocol. In the context of Horizon, the IDP is used to authenticate users when they log in to the system. Horizon does not store user information itself, but instead relies on the IDP to provide the necessary information about the user.

## Adding an IDP

1. Generate an application ID and secret in the IDP system.
2. Click **more** at the top of the page.
3. Select the **admin** option.
4. In the left sidebar, choose **IDPs**.
5. Click the **New login method with OIDC** button.
6. Enter the IDP's name, display name, and discovery endpoint.
7. Enter the application ID and secret.
8. Enter the scopes (such as profile, email, and openid).
9. Click **Submit**.
10. Test the OIDC configuration by attempting to [link](./user-management.md#modify-oidc-link) with the new configuration in your personal space.

If the IDP system does not support discovery service, you can omit the discovery endpoint and manually enter the other information. It is important to note that if multiple IDPs are configured, users will need to manually link to the new IDP rather than logging in directly, as this will result in two different accounts in Horizon.

### Gitlab as IDP

The following picture demonstrate how to add GitLab as an IDPbelow show how to add.

<img src="/image/idp_add.png" style={{boxShadow: "10px 5px 5px grey", radius:"10px", borderRadius: "10px"}} /><br /><br />

If you don't have a discovery endpoint for your OIDC provider, you can manually specify the authorization endpoint, userinfo endpoint, and issuer for your provider.

<img src="/image/discovery_field.png" style={{boxShadow: "10px 5px 5px grey", radius: "10px", borderRadius: "10px"}} />  

## Deleting an IDP

To delete an IDP:

1. Click **more** at the top of the page.
2. Select the **admin** option.
3. In the left sidebar, choose **IDPs**.
4. Select the appropriate IDP and click **Delete**.
