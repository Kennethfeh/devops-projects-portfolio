# Helm Deployment Project

Node.js service packaged with a Helm chart for repeatable Kubernetes deployments.

## Application

```
cd app
npm install
npm test
npm run dev
```

Build a Docker image and publish it to your registry before installing the chart.

## Deploy with Helm

```
helm dependency update helm/app-chart
helm upgrade --install helm-app ./helm/app-chart \
  --namespace helm-demo --create-namespace \
  --set image.repository=kennethfeh/helm-app \
  --set image.tag=latest
```

Expose the ingress hostname (`helm-app.local`) through your ingress controller or `/etc/hosts` entry.
