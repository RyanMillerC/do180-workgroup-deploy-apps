# Multi-service application deployment with OpenShift

OpenShift can run multiple application services in the same namespace with the
services communicating internally.

```bash
$ oc new-project hello-world
$ oc new-app \
      --name hello-world-backend \
      --context-dir 07-multi-service-application/backend \
      https://github.com/RyanMillerC/do180-workgroup-deploy-apps
$ oc new-app \
      --name hello-world-frontend \
      --context-dir 07-multi-service-application/frontend \
      --env BACKEND_SERVICE='http://hello-world-backend.hello-world.svc.cluster.local' \
      https://github.com/RyanMillerC/do180-workgroup-deploy-apps
$ oc get builds
# Wait for build to complete
$ oc get pods
$ oc get svc
$ oc get routes
$ oc expose svc hello-world-frontend
$ oc get routes
$ curl -k http://REPLACE_WITH_YOUR_ROUTE
$ oc delete project hello-world
```
