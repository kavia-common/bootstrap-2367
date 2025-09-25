#!/usr/bin/env bash
# Ensure this script runs in its own directory so npm uses the correct package.json
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# The project root is the parent of .init
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${PROJECT_ROOT}"

# Run lint within the project directory
npm run lint
