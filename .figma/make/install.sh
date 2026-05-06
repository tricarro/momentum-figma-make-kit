#!/usr/bin/env bash
set -euo pipefail

# Load environment variables
source "$(dirname "$0")/env"

# Load nvm if available
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
nvm use "$NODE_VERSION" 2>/dev/null || true

cd "$APP_DIR"
npm install
