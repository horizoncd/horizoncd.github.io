---
title: Monitor
toc_max_heading_level: 6
---

Observability of cloud native usually includes logs, metrics, and traces. Logs and traces are not within the scope of this article. Let's see what abilities Horizon provides for Monitoring(metrics).

Horizon is a standardized cloud native delivery platform, so it is natural for us to choose the Prometheus monitoring stack as the foundation of our monitoring capabilities. Horizon itself does not deliver the Prometheus monitoring stack, so users need to deploy Prometheus in advance. We recommend using [prometheus-operator](https://prometheus-operator.dev/) to deliver the Prometheus monitoring stack in a declarative manner, which will integrate well with Horizon's template system.

## Usage

We have built several monitoring dashboards with best practice based on [Grafana](https://grafana.com/) for users to quickly experience and use. Next, let's see how to use it.

Enter the monitoring dashboard for a particular cluster.

* Select a cluster from the cluster list page.
* Click **Monitoring** from its menus.

The following dashboards will be shown：

* **Pod** - Resources monitor at the pod level.
* **Monitor** - Resources monitor at the container level.
* **Serverless** - If the load is delivered based on Knative, this dashboard can be used.

The following time periods are available for selection：

* 1h
* 3h
* 6h
* 12h
* 1day
* 3day
* custom - Customize the start and end of the time period.

'Auto refresh' is also supported with the following options:

* Close - Means closing the 'Auto refresh'.
* 30s
* 1 min
* 5 min

These standard monitoring dashboards can meet basic observability needs. If you have further monitoring needs, you can contact your administrator to easily add more monitoring dashboards.
