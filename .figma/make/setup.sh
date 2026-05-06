#!/usr/bin/env bash
set -euo pipefail

# Load environment variables
source "$(dirname "$0")/env"

# Ensure Node.js is available via nvm
if command -v nvm &>/dev/null || [ -s "$HOME/.nvm/nvm.sh" ]; then
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
  nvm install "$NODE_VERSION"
  nvm use "$NODE_VERSION"
else
  echo "Node.js $(node -v 2>/dev/null || echo 'not found') — nvm not available, using system Node"
fi

node -v
npm -v
