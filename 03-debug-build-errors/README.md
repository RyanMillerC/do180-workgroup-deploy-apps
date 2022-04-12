# Debugging source-to-image builds

Sometimes errors pop up in the build process in OpenShift. Try to debug this:

```bash
$ oc new-project hello-world
$ oc new-app \
      --name hello-world \
      --context-dir 03-debug-build-errors \
      https://github.com/RyanMillerC/do180-workgroup-deploy-apps
$ oc get builds
# Debug build/app so that it returns hello world when curl'ed from outside the
# cluster. When you're done:
$ oc delete project hello-world
```
