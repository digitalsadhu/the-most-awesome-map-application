#!/usr/bin/env bash
set -euo pipefail

WEBHOOK_FILE="/home/deploy/.config/mcmap/discord-webhook"
WEBHOOK_URL="$(cat "$WEBHOOK_FILE")"

send_discord() {
  local msg="$1"
  curl -fsS -X POST \
    -H "Content-Type: application/json" \
    -d "$(printf '{"content":%q}' "$msg")" \
    "$WEBHOOK_URL" >/dev/null
}

START_TS="$(date -Is)"
send_discord "🗺️ Map import started on $(hostname) at ${START_TS}"

on_exit() {
  local code=$?
  local END_TS
  END_TS="$(date -Is)"
  if [ "$code" -eq 0 ]; then
    send_discord "✅ Map import completed successfully at ${END_TS}"
  else
    send_discord "❌ Map import FAILED (exit code ${code}) at ${END_TS}. Check logs."
  fi
}
trap on_exit EXIT

REPO_DIR="/opt/mcmap"
WORLD_PATH="/home/amp/.ampdata/instances/TheMostAwesome01/Minecraft/worlds/The Most Awesome/"
LOG_DIR="/var/log/mcmap"

mkdir -p "$LOG_DIR"
chown deploy:deploy "$LOG_DIR"

cd "$REPO_DIR"

# Keep repo updated (safe since repo is public)
git pull --ff-only >/dev/null 2>&1 || true

# Run generator
./run.sh "$WORLD_PATH" >>"$LOG_DIR/run.out.log" 2>>"$LOG_DIR/run.err.log"