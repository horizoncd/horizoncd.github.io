## Oauth 2.0 application

You can use Horizon as an OAuth 2.0 authentication identity provider by following steps:

1. Creating oauth applications: currently only group level oauth applications are supported, and only group owners are supported to create.
2. Your server should support oauth 2.0：In case the token is not passed, does not exist or expires, the third-party server needs to exchange the token with the user's authorization.

### Create group owned applications

1. Go to your group, click "New application" button in Settings->Developer.
2. Enter a name, homepage URL, description and authorization callback URL. The callback URL is the URL where users are sent after they authorize with Horizon.
3. Select  "Create". You can get OAuth 2 Client ID in the "clientID" field.
4. Click on the application name, you can edit the application, as well as get the server-side secret key for token exchange. Remember to save the secret key, you can't see it next time.

### Supported OAuth 2.0 flows

1. When the user does not pass a token, or when the passed token is invalid，the server needs to return a 302 code that redirects the client to the following:

```
GET https://horizon/login/oauth/authorize?client_id=client_id&redirect_uri=redirect_uri&scope=scope&state=state
```

The parameters are as follows:

| Name         | Type   | Description                                                                                                                                 |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| client_id    | String | Required.<br />The client id you received from Horizon after you create the oauth app.                                                      |
| redirect_uri | String | Required.<br />The URL in the application that the user is sent to after being authorized. <br />Must match the callback URL of oauth app.. |
| scope        | String | Optional.<br />A list of scopes separated by spaces.<br />Supported scopes can be found at xxx                                              |
| state        | String | Required.<br />Non-guessable random string, which is used to prevent CSRF attack.                                                           |

2. If the user authorizes your request, Horizon will redirect back to your site with a code in the query parameter, which will expire in 10 minutes. You can use code to exchange for a token by the following API：

```
POST https://horizon.com/login/oauth/access_token?client_id=&client_secret=&code=&redirect_uri=
```

The parameters are as follows:

| Nane          | Type   | Description                                                                                |
| ------------- | ------ | ------------------------------------------------------------------------------------------ |
| client_id     | String | Required.<br />The client id you received from Horizon when you registered the oauth app.  |
| client_secret | String | Required.<br />The client secret you received from Horizon after you create the oauth app. |
| code          | String | Required.<br />The code you received from Horizon after the user authorizes your request. |
| redirect_uri  | String | Required.<br />The URL that the user is sent to after being authorized.                    |

The response body is as follows:

```
{

  "access_token":"$accessToken",
  "scope":"",
  "token_type":"bearer"
  "expire_in": "3600"
}
```

3. How to use token

You can refer to [Using the API](../../reference/api/use-the-apis.md)
