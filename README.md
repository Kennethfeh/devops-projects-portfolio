# DevOps Projects Portfolio

This repository consolidates the DevOps projects I showcase to recruiters and hiring managers. Each folder is a self-contained environment with infrastructure-as-code, automated CI pipelines, and documentation that mirrors how I run production-like workloads. Start with the summaries below, then drill into the individual project READMEs for setup and design details.

## Projects at a glance

| Folder | Project | Focus |
| --- | --- | --- |
| `01-kubernetes-microservice-app` | Kubernetes Microservice App | Multi-service Node.js system deployed via Kubernetes manifests, highlighting service mesh style traffic through a gateway. |
| `02-ci-cd-pipeline-demo` | CI/CD Pipeline Service | Express API wired to a full GitHub Actions workflow covering lint/test/build/scan stages. |
| `03-fullstack-docker-app` | Fullstack Docker Application | React + Express bundle deployed with Docker Compose and integration tests. |
| `04-helm-deployment-project` | Helm Deployment Project | Containerized Node.js app packaged as a reusable Helm chart. |
| `05-ansible-config-management` | Ansible Config Management | Infrastructure automation for nginx hosts using Ansible roles and CI linting. |
| `06-monitoring-and-logging-stack` | Monitoring & Logging Stack | Prometheus, Grafana, Loki, and Promtail stack with automated smoke tests. |

## Highlights per project

### 01-kubernetes-microservice-app
- Three Node.js services (gateway + two APIs) with separate Dockerfiles and unit tests.
- Kubernetes manifests include deployments, services, readiness/liveness probes, and a dedicated namespace.
- GitHub Actions workflow runs npm lint/tests for each service and builds Docker images to prove deployability.
- Demonstrates multi-service orchestration, inter-service communication, and cluster-ready configuration.

### 02-ci-cd-pipeline-demo
- Express API exposing `/build-info` and `/healthz` for build metadata and runtime checks.
- Workflow enforces linting, unit tests, Docker image creation, and documents where container scanning occurs.
- Ideal for discussing CI/CD best practices, trunk-based development, and DevSecOps gates.

### 03-fullstack-docker-app
- React frontend and Express backend with shared integration tests (`scripts/integration-test.js`).
- Multi-stage Dockerfile plus docker-compose for local parity with production.
- CI pipeline installs, tests, builds, and runs integration tests against a Compose stack to validate end-to-end behavior.

### 04-helm-deployment-project
- Node.js service packaged for Kubernetes via a Helm chart (`helm/app-chart`).
- Chart templates cover ConfigMaps, Deployment, Service, and Ingress; values file supports environment overrides.
- Workflow installs dependencies, runs app lint/tests, sets up Helm, and performs `helm lint` + `helm template` to catch regressions.

### 05-ansible-config-management
- Ansible role provisions nginx, deploys templated content, and manages handlers for idempotent restarts.
- CI uses `ansible-lint` and `ansible-playbook --syntax-check` to validate infrastructure-as-code changes.
- Includes example inventory and usage instructions to reproduce the automation locally or in a lab.

### 06-monitoring-and-logging-stack
- Docker Compose stack combining Prometheus, Grafana, Loki, and Promtail with predefined dashboards and datasources.
- Smoke test script validates the configuration parses and services respond before deployment.
- GitHub Actions job runs `docker compose config` and the smoke test to keep observability tooling reliable.

## How to evaluate the repo
- Review each project README for setup steps, architecture diagrams, and workflow badges.
- Inspect the `.github/workflows/ci.yml` files to see the automation gates enforced per project.
- Browse the commit history (`git log`) to view how each project was added as an independent commit, reflecting real contribution history.

For any additional context or walkthroughs, feel free to reach out—I'm happy to dive deeper into any of these systems.
