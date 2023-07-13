---
title: Developer Catalog
toc_max_heading_level: 6
---

## Catalog

Developer Catalog is a collection of templates that can be deployed to the cluster, and developers can create an instance with a few inputs by using the templates. The templates are defined by the administrator.

### Templates

Template is composed of two parts: `helm chart` and `json schema`. `helm chart` is the part actually deployed to the cluster, and `json schema` is the part used to generate the form to get user's input. The documentation about "how to create a template" could be found [here](../../reference/template/specification.md). 

Now templates shown in the catalog are:

#### memcached

Memcached is a general-purpose distributed memory caching system. We mede [a template for memcached](https://github.com/horizoncd/memcached), you could using it to create a memcached instance.

## Summary

It is the first step of catalog service, we will add more templates in the future, like mysql, redis, etc. If you have any questions, please feel free to contact us.
