#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <path-to-world>"
  exit 1
fi

WORLD_PATH="$1"

# Detect with architecture and run the appropriate binary
case "$(uname -s)" in
  Darwin)
    CLI_BIN="./cli/mac/unmined-cli"
    ;;
  Linux)
    CLI_BIN="./cli/linux/unmined-cli"
    ;;
  *)
    echo "Unsupported operating system: $(uname -s)"
    exit 1
    ;;
esac

"$CLI_BIN" web render \
  --world "$WORLD_PATH" \
  --output "./maps" \
  --showgrid true \
  --imageformat "webp" \
  --dimension overworld \
  --zoomout 3 \
  --zoomin 3 \
  --background "#333333" \


#   --world              Required. Game folder to read.

#   --dimension          Dimension name or number to read (overworld, nether,
#                        end).

#   --imageformat        (Default: Jpeg) Image format (png, jpeg, bmp, webp, tiff,
#                        pbm). Default is jpeg.

#   --topY               Highest Y coordinate to show (for cave maps)

#   --bottomY            Lowest Y coordinate to show

#   --gndxray            Use underground x-ray (for cave maps to make the ground
#                        transparent)

#   --output             Required. Output folder.

#   -a, --area           Area to process. See README for syntax.

#   -f, --force          Update all regions, not just the changed ones.

#   -c                   Continue on chunk errors

#   --zoomout            (Default: 6) Zoom out levels

#   --zoomin             (Default: 0) Zoom in levels

#   --night              Use night mode

#   --players            Export player data

#   --mapsettings        Load map settings from file

#   --background         Background color #rrggbb

#   --chunkprocessors    Number of chunks processed at the same time

#   --showgrid           Show grid by default

#   --enablegrid         Enable grid

#   --centerx            Map center X

#   --centerz            Map center Z

#   --shadows            Use shadows (false,true,2d,3d,3do)

#   --log-level          (Default: Information) Logging level. Accepted values:
#                        verbose, debug, information, warning, error, fatal

#   --log-console        (Default: true) Log to console (true/false)

#   --log-file           Name of the file to log to

#   --help               Display this help screen.