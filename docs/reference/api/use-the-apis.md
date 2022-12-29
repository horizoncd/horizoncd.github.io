---
title: Using the API
---

## Authentication

There are two ways to authenticate with the Horizon API:

* OAuth2 tokens

An OAuth2 token is usually prefixed with "ho_" and can be used to authenticate with the API by including it in the `Authorization` header.

Here's an example of using an OAuth2 token in a header:

```
curl -H "Authorization: Bearer OAUTH-TOKEN" "https://horizon/apis/v2/groups"
```

* Access tokens

An access token is usually prefixed with "ha_" and can be used to authenticate with the API by including it in the `Authorization` header.

Here's an example of using an access token in a header:

```
curl -H "Authorization: Bearer ACCESS-TOKEN" "https://horizon/apis/v2/groups"
```

## Pagination

In some cases, the returned results may span multiple pages. When listing resources, you can use the following parameters:

| Parameter  | Description                                              |
| ---------- | -------------------------------------------------------- |
| pageNumber | Page number (default: 1).                                |
| pageSize   | Number of items to list per page (default: 20, max: 50). |
