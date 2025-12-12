# Fullstack Docker App

React + Express application bundled with a multi-stage Dockerfile and docker-compose setup. The backend serves both the API and the compiled frontend bundle.

## Development

```
cd frontend && npm install && npm run dev
cd backend && npm install && npm run dev
```

Frontend runs on `5173` (proxied to backend), backend on `8080`.

## Docker workflow

```
docker compose up --build
node scripts/integration-test.js
```

Stop containers when finished with `docker compose down`.

## Continuous integration

`.github/workflows/ci.yml` performs:

1. Frontend install, tests, and production build
2. Backend install, lint, and tests
3. Docker Compose build
4. Integration test against the running compose stack

Author: Kenneth Feh
