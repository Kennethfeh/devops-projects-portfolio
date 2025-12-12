#!/usr/bin/env bash
set -euo pipefail

trap 'docker compose down' EXIT

docker compose up -d

wait_for() {
  local url=$1
  local attempts=${2:-30}
  local delay=${3:-5}

  for ((i=1; i<=attempts; i++)); do
    if curl --fail --silent --show-error "$url" >/dev/null; then
      echo "Service ready: $url"
      return 0
    fi
    echo "Waiting for $url ($i/$attempts)"
    sleep "$delay"
  done

  echo "Timed out waiting for $url" >&2
  return 1
}

wait_for http://localhost:9090/-/ready 40 5
wait_for http://localhost:3000/api/health 40 5
