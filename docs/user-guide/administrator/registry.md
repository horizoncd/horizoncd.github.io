Registry is an essential part of CI&CD system. We use registry to deliver our applications. And registry guarantees the requirements of immutable infrastructure.

## View the Registry list

See a complete list of registry.

1. Hover your cursor over the **More** icon until a menu appears.
2. Click **Admin**.
3. Click **Registry.**

The following information is displayed:

* Name - A unique name identifier for registry.
* Server - Access address of registry.
* Type - Type of registry, such as Harbor.

## View registry detail

See all details associated with a specific registry.

1. Hover your cursor over the **More** icon until a menu appears.
2. Click **Admin**.
3. Click **Registry.**
4. Enter the detail page of target registry by clicking the registry name.

The following information is displayed:

* Name - A unique name identifier for registry.
* Server - Access address of registry.
* Type - Type of registry, such as Harbor.
* Path - Unified url prefix of image.
* Token - Token required to access the registry through the API.
* Skip TLS - Whether to skip TLS certificate authentication in https requests.

## Learn about the types of registries supported

Harbor is the most popular and full-featured open source implementation of image services in the industry. So currently, Harbor is the only option that can be chosen. But Horizon is open and able to support more registry service providers, such as Aliyun ACR, Google Container Registry, etc.
