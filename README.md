# The Most Awesome Maps

Runs the [unmined CLI](https://unmined.net) `render web` command to generate the maps, plural. One map per dimension. `run-server.sh` runs `run.sh` on a schedule to update the map tiles as well as some cleanup and status messages to Discord.

Overworld map is generated to `maps/`, Nether map to `maps/nether/`, End map to `maps/end/`. There's some duplication of files, but the nether map refers to the same CSS file as the overworld to avoid having to copy everything.

Each map has its own file called `custom.markers.js` that has all the points of interest.
