#!/usr/bin/env bash
set -euo pipefail

trap 'docker compose down' EXIT

docker compose up -d

HOST_ADDR=${HOST_ADDR:-127.0.0.1}

resolve_port() {
  local service=$1
  local internal_port=$2
  local mapping
  mapping=$(docker compose port "$service" "$internal_port" | head -n1 | tr -d '\r') || true
  if [ -z "$mapping" ]; then
    echo "$HOST_ADDR:$internal_port"
  else
    echo "$mapping"
  fi
}

PROM_ADDR=${PROM_ADDR:-$(resolve_port prometheus 9090)}
GRAFANA_ADDR=${GRAFANA_ADDR:-$(resolve_port grafana 3000)}

echo "Probing Prometheus at $PROM_ADDR"
echo "Probing Grafana at $GRAFANA_ADDR"

wait_for() {
  local url=$1
  local attempts=${2:-30}
  local delay=${3:-5}

  for ((i=1; i<=attempts; i++)); do
    if curl --fail --silent --show-error --ipv4 "$url" >/dev/null; then
      echo "Service ready: $url"
      return 0
    fi
    echo "Waiting for $url ($i/$attempts)"
    sleep "$delay"
  done

  echo "Timed out waiting for $url" >&2
  docker compose ps >&2 || true
  docker compose logs --tail 50 >&2 || true
  return 1
}

wait_for "http://$PROM_ADDR/-/ready" 60 5
wait_for "http://$GRAFANA_ADDR/api/health" 60 5
