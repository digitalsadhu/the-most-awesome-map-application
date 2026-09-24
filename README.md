# The Most Awesome Maps

Runs the [unmined CLI](https://unmined.net) `render web` command to generate the maps, plural. One map per dimension. `run-server.sh` runs `run.sh` on a schedule to update the map tiles as well as some cleanup and status messages to Discord.

Overworld map is generated to `maps/`, Nether map to `maps/nether/`, End map to `maps/end/`. There's some duplication of files, but the nether map refers to the same CSS file as the overworld to avoid having to copy everything.

Each map has its own file called `custom.markers.js` that has all the points of interest.

## Local development

You can put a test world in a folder in the `worlds/` directory and then use the `run.sh` script like this:

```sh
./run.sh ./worlds/Flatland
```

On the live server any changes to the HTML, CSS and JavaScript in the `maps/` directory after running that script will get reset.

```sh
git checkout maps/
```

Assuming you have Node.js installed you can then serve up the map like this:

```sh
npx http-server maps/
```

Then visit http://127.0.0.1:8080 in a browser.
