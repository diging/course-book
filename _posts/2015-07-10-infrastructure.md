---
layout: post
tags: Software-Development
date: 2015-07-10 12:30
title: Software Development Infrastructure
published: true
---

In the Digital Innovation Group, we follow Continous Integration principles as much as possible. We are still in the process of setting up the infrastructure, but ideally all projects will use the following components.

1. Source code is hosted at GitHub. Since all of our software is open source, all projects will be hosted in public repositories.
2. Tests will run every time a change is pushed to the master branch of the repository or a pull request is made. Tests are run by either Travis CI or Jenkins.
3. Jenkins will run code style checks on your committed code. If there are errors or warnings, it is your responsibility to fix these before a pull request can be merged.
3. After a change has been pushed to/merged into the master branch, web applications will be deployed to a test instance by Jenkins.

If any of the above steps fail, it is your responsibility to check why a step failed and to fix it.
