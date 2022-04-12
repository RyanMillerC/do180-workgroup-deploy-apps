# Deploy Using Container Image

Use OpenShift to deploy an existing container image:

```bash
$ oc new-project hello-world
$ oc new-app \
      --name hello-world \
      --image quay.io/rymiller/node8-hello-world
$ oc get svc
$ oc get routes
$ oc expose svc hello-world
$ oc get routes
$ curl -k http://REPLACE_WITH_YOUR_ROUTE
```
