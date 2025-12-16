# DevOps Portfolio

I build and operate delivery pipelines, infrastructure-as-code, and observability stacks that enable engineering teams to ship faster with confidence. This portfolio mirrors the scope of work I typically own: Kubernetes platform care, CI/CD governance, configuration management, and production-ready monitoring.

- **Role focus:** DevOps / Platform Engineering / SRE
- **Daily toolkit:** Kubernetes, Docker, Helm, Terraform (not shown here), GitHub Actions, Prometheus stack, Ansible, bash automation
- **Value I bring:** repeatable delivery workflows, policy-as-code guardrails, environment parity, and actionable telemetry.

## Experience Snapshot

- **Eduson — DevOps Engineer (Mar 2024 – Present)**
- **Nexttel Communication — DevOps Engineer (Mar 2023 – Mar 2024)**

## Projects at a Glance

| Folder | Project | DevOps Focus |
| --- | --- | --- |
| `01-kubernetes-microservice-app` | Kubernetes Microservice App | Kubernetes app lifecycle management, health-probed deployments, mesh-style routing, and multi-service CI gates. |
| `02-ci-cd-pipeline-demo` | CI/CD Pipeline Service | Secure pipeline design with lint/test/build/scan stages, build metadata endpoints, and container publishing. |
| `03-fullstack-docker-app` | Fullstack Docker Application | Environment parity with Docker Compose, automated integration testing, and multi-stage image hardening. |
| `04-helm-deployment-project` | Helm Deployment Project | Helm chart authoring, templating strategies, linting, and reusable release automation. |
| `05-ansible-config-management` | Ansible Config Management | Fleet configuration drift control with idempotent roles, syntax/lint enforcement, and inventory patterns. |
| `06-monitoring-and-logging-stack` | Monitoring & Logging Stack | Production-grade observability using Prometheus/Grafana/Loki/Promtail plus scripted smoke tests. |

## Highlights per Project

### 01-kubernetes-microservice-app
- Three Node.js services (gateway + two APIs) with separate Dockerfiles and test suites so each deployable unit is independently validated.
- Kubernetes manifests define deployments, services, readiness/liveness probes, resource requests, and namespace isolation to illustrate day-2 operations.
- GitHub Actions workflow fans out lint/tests per service, builds OCI images, and surfaces SBOM metadata to ensure I can promote artifacts confidently.
- Demonstrates multi-service orchestration, inter-service communication, and the operational guardrails expected from a production cluster handoff.

### 02-ci-cd-pipeline-demo
- Express API exposing `/build-info` and `/healthz` so downstream releases can read provenance data at runtime.
- Workflow enforces linting, unit tests, Docker image creation, and hooks for container scanning / signing before a deploy job can trigger.
- Highlights how I structure trunk-based CI/CD pipelines with clear separation of validation, artifact, and deployment stages.

### 03-fullstack-docker-app
- React frontend and Express backend with shared integration tests (`scripts/integration-test.js`) to validate contract compatibility before publishing.
- Multi-stage Dockerfile plus docker-compose for repeatable local/CI environments and smaller runtime images.
- CI pipeline installs, tests, builds, and runs integration tests against a Compose stack to gate releases on full-system health.

### 04-helm-deployment-project
- Node.js service packaged for Kubernetes via a Helm chart (`helm/app-chart`) so teams can adopt it with a simple `helm install`.
- Chart templates cover ConfigMaps, Deployment, Service, and Ingress; `values.yaml` models promotion across environments and handles secret injection stubs.
- Workflow installs dependencies, runs app lint/tests, sets up Helm, and performs `helm lint` + `helm template` to prevent drift sneaking into releases.

### 05-ansible-config-management
- Ansible role provisions nginx, deploys templated content, hardens basics, and manages handlers for idempotent restarts.
- CI uses `ansible-lint` and `ansible-playbook --syntax-check` so configuration changes stay reviewable and production-safe.
- Includes inventory examples, make targets, and documentation to demonstrate how I onboard ops teams to shared automation.

### 06-monitoring-and-logging-stack
- Docker Compose stack combining Prometheus, Grafana, Loki, and Promtail with predefined dashboards, scrape configs, and datasource provisioning.
- Smoke test script validates configuration and HTTP health before promoting updates so observability tooling never surprises SREs.
- GitHub Actions job runs `docker compose config`, executes the smoke test, and posts artifacts to prove changes are safe to roll out.

## How to Evaluate the Repo

- Review each project README for setup steps, architecture decisions, and workflow badges that reflect real-world documentation standards.
- Inspect the `.github/workflows/**/*.yml` files to see the automation gates, caching strategies, and promotion rules I use.
- Run the provided scripts (`npm test`, `docker compose up`, `ansible-playbook`) to see how I instrument validation into the developer workflow.
- Browse the commit history (`git log`) to view how each project landed as an independent initiative, mirroring incremental delivery.

If you want a deeper walkthrough, I’m happy to whiteboard the architecture, pipeline stages, or operations model behind any of these projects.
