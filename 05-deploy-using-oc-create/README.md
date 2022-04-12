# Deploy using `oc create`

Deploy an application using k8s manifests and `oc create`:

```bash
$ oc create -f namespace.yaml
$ oc create -f service.yaml
$ oc create -f deployment.yaml
$ oc get pods -w
# Wait for pod to start up
$ oc expose svc hello-world
$ oc get routes
$ curl -k http://REPLACE_WITH_YOUR_ROUTE
```
