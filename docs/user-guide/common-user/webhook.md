---
title: Webhook
toc_max_heading_level: 6
---

Webhooks are custom HTTP callbacks that you define. They are usually triggered by an event, such as creating a new cluster or triggering a new deploy task. For example, you can use webhooks to:

- Trigger other systems, such as starting a test when the deploy task started.
- Send notifications, such as notifying specific people when a cluster is deleted.

You can connect horizon to more external systems through webhook and your custom webhook receivers.

## Events

The following events are supported.

| Event type              | Trigger                                                           |
| ----------------------- | ----------------------------------------------------------------- |
| applications_created    | A new application is created.                                     |
| application_deleted     | An application is deleted.                                        |
| application_transferred | An application is transferred to another group.                   |
| cluster_created         | A new cluster is created.                                         |
| cluster_deleted         | A cluster is deleted.                                             |
| clusters_builddeployed  | A cluster has completed a build task and triggered a deploy task. |
| clusters_deployed       | A cluster has triggered a deploy task.                            |
| clusters_rollbacked     | A cluster has triggered a rollback task.                          |
| clusters_freed          | A cluster has been freed.                                         |

Note: "*" indicates that you want to follow any event.

## Create a webhook

In Settings->Webhooks on the group home page, you can view the list of created webhooks and create a new webhook.

Webhooks contain the following configuration.

- URL: URL of the webhook endpoint. The URL must be percent-encoded if it contains one or more special characters.
- Enable ssl verify: Whether to enable ssl verification when the url schema is HTTPS.
- Description: Description of your webhook.
- Secret: Secret Token of your custom webhook receiver.
- Triggers: Events to trigger the webhook.

Click "submit" to complete the creation, you can see some basic information of the newly created webhook in the webhook list, and through the "operations" column to edit, delete webhook and view logs.

## View the logs and retry

Click "View logs" on the right side of the webhook list to enter the logs list page, you can see the logs of this webhook, click "id" to enter the log details page, where you can view the request header, request body, response header, response body information of this trigger record.

If the webhook fails to send, you can resend it via the "resend" button in the upper right corner.

## Headers and Payload example

```
Content-Type: application/json;charset=utf-8
X-Horizon-Webhook-Secret: "secret"

{
    "eventID": 1,
    "webhookID": 1,
    "application": {
        "id": 1,
        "name": "test",
        "priority": "P0"
    },
    "eventType": "applications_created",
    "user": {
        "id": 1,
        "name": "test",
        "email": "test@noreply.com"
    }
}
```
