#!/usr/bin/env bash
set -euo pipefail

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