#!/usr/bin/env bash
set -euo pipefail

# Load environment variables
source "$(dirname "$0")/env"

# Wait for the Vite dev server to accept connections
timeout=30
while [ $timeout -gt 0 ]; do
  if curl -so /dev/null -w '' "http://localhost:${DEV_PORT}" 2>/dev/null; then
    echo "Dev server is running at $DEV_URL"
    exit 0
  fi
  sleep 1
  timeout=$((timeout - 1))
done

echo "Dev server failed to start within 30 seconds"
exit 1
