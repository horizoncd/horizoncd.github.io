---
title: Trigger
toc_max_heading_level: 6
---

Horizon provides a trigger mechanism to trigger a pipeline when a specified event occurs. Now we support Github Action and Gitlab CI/CD.

## Github Action

We provide an [action](https://github.com/horizoncd/actions), and you could just use it in your workflow file.

Below is an example of a workflow file:

```yaml
name: Deploy to Horizon

on:
  push:
    branches: [ "main" ]

jobs:

  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - uses: horizoncd/actions@v1
      with:
        token: {{ secrets.HORIZON_TOKEN }}
        addr: {{ secrets.HORIZON_ADDR }}
        deployMethod: buildDeploy
        title: 'deployment from github'
        instanceID: 61851
        gitRefType: commit
        ref: ${{ github.sha }}
```

This action will trigger a pipeline to deploy your commit when a push event occurs on the main branch.

## Gitlab CI/CD

We provide a cli tool [horizoncd](https://www.npmjs.com/package/horizoncd?activeTab=readme), and you could just use it in your gitlab-ci.yml file, but it requires nodejs environment.

Below is an example of a gitlab-ci.yml file:

```yaml
stages:
  - deploy

build:
  stage: deploy
  script:
    - npm install horizoncd npx
    - npx horizoncd \
        -a $HORIZON_ADDR \
        -t $HORIZON_TOKEN \
        -c 61862 \
        --title 'deploy from gitlab' \
        -m builddeploy \
        -r $CI_COMMIT_SHA

  variables:
    HORIZON_ADDR: $HORIZON_ADDR
    HORIZON_TOKEN: $HORIZON_TOKEN
```

## Varaibles

| Name | Description | Required |
| --- | --- | --- |
| token | Horizon token with instance-write permissions for horizon | true |
| addr | Address of Horizon instance | true |
| title | Pipeline title | true |
| description | Pipeline description | false |
| instanceID | Application instance ID | true |
| deployMethod | buildDeploy or imageDeploy, method to deploy the app | true |
| gitRefType | branch, tag or commit only, required if deployMethod is "buildDeploy" | false |
| ref | Git ref, tag, branch or commit id | false |
| tag | tag of the image which are going to be deployed, required if deployMethod is "imageDeploy" | false |
