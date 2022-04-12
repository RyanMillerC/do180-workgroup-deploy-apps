# Build application using Source-to-Image

OpenShift can automatically build applications into a generic container image
without needed an explicit Containerfile/Dockerfile.

```bash
$ oc new-project hello-world
$ oc new-app \
      --name hello-world \
      --context-dir 02-build-with-s2i \
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
