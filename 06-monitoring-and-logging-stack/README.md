# Monitoring and Logging Stack

Docker Compose stack featuring Prometheus, Grafana, Loki, and Promtail for log shipping.

## Usage

```
docker compose up -d
open http://localhost:3000  # Grafana (admin/admin)
open http://localhost:9090  # Prometheus
```

Promtail tails `/var/log/*.log` on the host and forwards entries to Loki. Grafana automatically loads the Prometheus and Loki datasources and a sample dashboard under *General*.

Shut down with `docker compose down` when finished.
