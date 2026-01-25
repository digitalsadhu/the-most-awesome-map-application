# File: ops/fix-amp-acl.sh
# Purpose: Ensure deploy can read the AMP Minecraft world DB via ACLs (AMP may reset owner/group).
# Usage (as root):
#   INSTANCE_DIR="/home/amp/.ampdata/instances/TheMostAwesome01" \
#   WORLD_NAME="The Most Awesome" \
#   OUTPUT_DIR="/opt/mcmap/maps" \
#   DEPLOY_USER="deploy" \
#   ./ops/fix-amp-acl.sh
#
# Safe to commit: no secrets. Host-specific paths can be passed via env vars above.

#!/usr/bin/env bash
set -euo pipefail

DEPLOY_USER="${DEPLOY_USER:-deploy}"
INSTANCE_DIR="${INSTANCE_DIR:?INSTANCE_DIR is required (e.g. /home/amp/.ampdata/instances/TheMostAwesome01)}"
WORLD_NAME="${WORLD_NAME:?WORLD_NAME is required (e.g. The Most Awesome)}"
OUTPUT_DIR="${OUTPUT_DIR:-/opt/mcmap/maps}"

WORLD_DIR="${INSTANCE_DIR}/Minecraft/worlds/${WORLD_NAME}"
DB_DIR="${WORLD_DIR}/db"

need_bin() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Missing required command: $1" >&2
    exit 1
  }
}

need_bin setfacl
need_bin getfacl
need_bin sudo
need_bin install

# Ensure ACL tools are present on Debian (best-effort)
# (If you prefer not to auto-install, remove the apt-get block.)
if ! dpkg -s acl >/dev/null 2>&1; then
  apt-get update -y
  apt-get install -y acl
fi

# 1) Allow DEPLOY_USER to traverse the AMP tree down to the instance directory
setfacl -m "u:${DEPLOY_USER}:--x" /home/amp
setfacl -m "u:${DEPLOY_USER}:--x" /home/amp/.ampdata
setfacl -m "u:${DEPLOY_USER}:--x" /home/amp/.ampdata/instances
setfacl -m "u:${DEPLOY_USER}:--x" "${INSTANCE_DIR}"

# 2) Allow DEPLOY_USER to read/traverse the needed subtree
setfacl -m "u:${DEPLOY_USER}:rx" "${INSTANCE_DIR}/Minecraft"
setfacl -m "u:${DEPLOY_USER}:rx" "${INSTANCE_DIR}/Minecraft/worlds"
setfacl -m "u:${DEPLOY_USER}:rx" "${WORLD_DIR}"
setfacl -R -m "u:${DEPLOY_USER}:rx" "${DB_DIR}"

# 3) Default ACLs so newly created files/dirs inherit access
setfacl -m "d:u:${DEPLOY_USER}:--x" "${INSTANCE_DIR}"
setfacl -m "d:u:${DEPLOY_USER}:rx" "${WORLD_DIR}"
setfacl -m "d:u:${DEPLOY_USER}:rx" "${DB_DIR}"

# 4) Ensure output dir is writable by deploy (prevents UnauthorizedAccess to index.html)
install -d -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" -m 0755 "${OUTPUT_DIR}"
chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "${OUTPUT_DIR}"
chmod -R u+rwX "${OUTPUT_DIR}"
chmod -R a+rX "${OUTPUT_DIR}"

# 5) Quick verification (fails fast if still blocked)
sudo -u "${DEPLOY_USER}" ls -la "${DB_DIR}" >/dev/null

echo "OK: ACLs applied and output dir prepared."