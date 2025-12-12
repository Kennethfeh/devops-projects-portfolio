# Kubernetes Microservice App

```
             +---------------------------+
             |        Gateway            |
             |  /api/aggregate endpoint  |
             +----+------------------+---+
                  |                  |
        +---------+----+      +------+--------+
        |  service1   |      |   service2     |
        | metrics API |      | status API     |
        +-------------+      +---------------+
```

Three Node.js services demonstrate how a gateway routes traffic to backend APIs inside a Kubernetes cluster.

## Services

- **service1** – returns a static message with timestamps.
- **service2** – reports uptime and health.
- **gateway** – aggregates responses from both services and exposes `/api/aggregate`.

## Local development

```
(cd service1 && npm install && npm run dev)
(cd service2 && npm install && npm run dev)
(cd gateway && npm install && SERVICE1_URL=http://localhost:4001/api/service1 SERVICE2_URL=http://localhost:4002/api/service2 npm run dev)
```

## Kubernetes deployment

```
kubectl create namespace microservices
kubectl apply -n microservices -f k8s/
```

Update container image tags to match the registry you publish to. Gateway service listens on port 80 within the cluster.

## CI workflow

`.github/workflows/ci.yml` installs dependencies, runs lint/tests for each service, and performs Docker builds to ensure images are reproducible. The final status ensures reviewers can trust the pipelines before deploying to a cluster.
