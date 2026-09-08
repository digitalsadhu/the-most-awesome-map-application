# The Most Awesome Maps

Runs the [unmined CLI](https://unmined.net) `render web` command to generate the maps, plural. One map per dimension. `run-server.sh` runs `run.sh` on a schedule to update the map tiles as well as some cleanup and status messages to Discord.

Overworld map is generated to `maps/`, Nether map to `maps/nether/`, End map to `maps/end/`. There's some duplication of files, but the nether map refers to the same CSS file as the overworld to avoid having to copy everything.

Each map has its own file called `custom.markers.js` that has all the points of interest.

## External resources

From [this Gist](https://gist.github.com/cliffano/77a982a7503669c3e1acb0a0cf6127e9) download a **client** `.jar`, not server (scroll the table toward the right). Name it `client-<version>.jar`, for example `client-26.2.jar`.

You also need the full variant of a `.zip` of Bedrock samples [from this Mojang repo](https://github.com/Mojang/bedrock-samples/releases), for example `bedrock-samples-v1.26.40.05-full.zip`.
