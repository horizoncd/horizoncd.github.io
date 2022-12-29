---
title: Template Specification
toc_max_heading_level: 6
---
## Helm Chart

Horizon Templates are based on Helm Charts, so it is important to have a basic understanding of [Helm Charts](https://helm.sh/docs/topics/charts/) before proceeding.

### Files in Template

Below is a description of the files found in a Horizon Template.

## templates, values.yaml, and Chart.yaml

[templates](https://helm.sh/docs/topics/charts/#template-files), [values.yaml](https://helm.sh/docs/topics/charts/#values-files), and [Chart.yaml](https://helm.sh/docs/topics/charts/#the-chartyaml-file) are equivalent to their counterparts in a Helm Chart.

In theory, all files in a Helm Chart can be included in a Horizon Template, but generally only templates, values.yaml, and Chart.yaml are needed.

## schema

The schema directory contains [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-formhttps://json-schema.org/) files, which are used by Horizon to render a form when creating an application or cluster. The form collects user input, which is used as the values to render the chart and generate the final manifest file for deployment to Kubernetes.

## output

The output directory contains rendered templates that are displayed on the cluster details page after deployment. It is commonly used to output the cluster's ingress domain.

> Example outputting the ingress domain
>
> ```
> {{- if (.Values.app.advanced.ingress.enabled | default false) }}
> domain:
>   description: the domain for the cluster
>   value: {{ template "ingress.host" . }}
> {{- end -}}
> ```
