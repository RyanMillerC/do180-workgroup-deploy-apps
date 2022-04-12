# Debugging applications

Debug an application running on OpenShift:

```bash
$ oc create -f namespace.yaml
$ oc create -f service.yaml
$ oc create -f deployment.yaml
# Debug application so that it returns hello world when curl'ed from outside
# the cluster. When you're done:
$ oc delete project hello-world
```
