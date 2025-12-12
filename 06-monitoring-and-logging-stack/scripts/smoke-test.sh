#!/usr/bin/env bash
set -euo pipefail

trap 'docker compose down' EXIT

docker compose up -d

HOST_ADDR=${HOST_ADDR:-127.0.0.1}
echo "Probing services via host $HOST_ADDR"

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

wait_for "http://$HOST_ADDR:9090/-/ready" 60 5
wait_for "http://$HOST_ADDR:3000/api/health" 60 5
