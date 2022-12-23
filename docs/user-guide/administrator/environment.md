## What are Environments?

Software development teams use Environments to create "stages" as they progress apps through the development process. Different environments often mean different stability requirements and service assurance capabilities.

You can initialize sorts of Environments in Horizon as a admin. With these Environments, the entire software development cycle is well tied together, and developers, testers, and acceptance staff can participate and contribute at each stage.

## Usages of Horizon's Environments

### Association with Kubernetes

The kubernetes options available in different environments should be different, so you need to associate the environment with the optional kubernetes.

It also supports setting the default Kubernetes in an Environment.

### Application's default kubernetes of an Environment

There is already a default Kubernetes configuration at the environment level, but there may be custom requirements at the application level.

Operation path: Application -> Settings -> Advance -> Default region
