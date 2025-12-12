#!/usr/bin/env bash
set -euo pipefail

trap 'docker compose down' EXIT

docker compose up -d
sleep 10
curl --fail http://localhost:9090/-/ready
curl --fail http://localhost:3000/api/health
