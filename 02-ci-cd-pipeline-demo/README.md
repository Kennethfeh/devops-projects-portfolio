# CI/CD Pipeline Demo

Small Express API showcasing a full CI/CD workflow with linting, tests, image builds, and a simulated security scan.

## Run locally

```
npm install
npm run dev
curl http://localhost:4100/build-info
```

## Continuous integration stages

1. **Install** – `npm install` ensures lockfile fidelity.
2. **Lint** – `npm run lint` enforces code standards.
3. **Test** – Node test runner validates endpoints using Supertest.
4. **Docker build** – creates the production container image.
5. **Security scan (simulated)** – placeholder command documents where a scan would run.

See `.github/workflows/ci.yml` for the complete pipeline.
