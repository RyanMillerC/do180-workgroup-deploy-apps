# Deploy Using Container Image

Use OpenShift to deploy an existing container image:

```bash
$ oc new-project hello-world
$ oc new-app \
      --name hello-world \
      --context-dir 01-build-from-containerfile \
      https://github.com/RyanMillerC/do180-workgroup-deploy-apps
$ oc get builds
# Wait for build to complete
$ oc get pods
$ oc get svc
$ oc get routes
$ oc expose svc hello-world
$ oc get routes
$ curl -k http://REPLACE_WITH_YOUR_ROUTE
$ oc delete project hello-world
```
