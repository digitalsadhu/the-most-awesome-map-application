/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

const PINS = {
    farm: 'farm.png',
    other: 'other.png',
    base: 'player-base.png',
    subway: 'subway-stop.png',
    trialChamber: 'trial-chamber.png',
}

const point = (data) => {
    return {
        image: PINS[data.type] || 'other',
        imageScale: 0.4,
        textColor: "white",
        offsetX: 0,
        offsetY: 30,
        font: "12px arial,sans serif",
        ...data,
    };
}

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        // {
        //     x: -200,
        //     z: -200,
        //     image: "custom.pin.png",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.5,
        // },

        // Example 2: Marker with text
        // {
        //     x: 0,
        //     z: 0,
        //     image: "custom.pin.png",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.5,
        //     text: "Marker with text",
        //     textColor: "red", 
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },

        // Example 3: Text only
        // {
        //     x: 200,
        //     z: 200,
        //     text: "Text only", 
        //     textColor: "yellow", 
        //     offsetX: 0,
        //     offsetY: 0, 
        //     font: "bold 50px Calibri,sans serif",
        // },

        // add your markers here
        point({
            x: 0,
            z: 0,
            text: "World Spawn\nshulker farm\nand subway",
            type: 'subway',
        }),
        point({
            x: -131,
            z: 83,
            text: "Abu Simba",
            type: '',
        }),
        point({
            x: 189,
            z: 127,
            text: "The first village",
            type: 'village',
        }),
        point({
            x: 0,
            z: 320,
            text: "HappyLlama999's cobblestone\ncastle complex",
            type: 'village',
        }),
        point({
            x: 30,
            z: -170,
            text: "PaleBlueDot's\nbase",
            type: 'base',
        }),
        point({
            x: -36,
            z: -171,
            text: "Kivee73's\nbase",
            type: 'base',
        }),
        point({
            x: 191,
            z: -72,
            text: "knipetang's\ntreehouse",
            type: 'base',
        }),
        point({
            x: 223,
            z: 72,
            text: "knipetang's\nhouse",
            type: 'base',
        }),
        point({
            x: -230,
            z: 10,
            text: "Village\nsubway",
            type: 'subway',
        }),
        point({
            x: -48,
            z: -322,
            text: "digitalsadhu's\nisland farm",
            type: 'farm',
        }),
        point({
            x: -214,
            z: 87,
            text: "digitalsadhu's\nnz house replica",
            type: 'base',
        }),
        point({
            x: -357,
            z: 5,
            text: "SlipperyButton's\nbase",
            type: 'base',
        }),
        point({
            x: -93,
            z: -78,
            text: "PaleBlueDot's\njapanese house",
            type: ''
        }),
        point({
            x: -197,
            z: -78,
            text: "Daveflave's base",
            type: 'base',
        }),
        point({
            x: -199,
            z: -381,
            text: "Daveflave's\niron and gold\nfarm",
            type: 'farm',
        }),
        point({
            x: -841,
            z: 1081,
            text: "Slipperbutton's\nturtle\nfarm",
            type: 'farm',
        }),
        point({
            x: 292,
            z: 1790,
            text: "Slipperbutton's\nredstone\nfarm",
            type: 'farm',
        }),
        point({
            x: -7450,
            z: 578,
            text: "Slipperbutton's\nraid\nfarm",
            type: 'farm',
        }),
        point({
            x: 185,
            z: 308,
            text: "kivee73's\nmodern\nhouse",
            type: 'base',
        }),
        point({
            x: -865,
            z: -819,
            text: "PaleBlueBlot's\nprismarine\nfarm",
            type: 'farm',
        }),
        point({
            x: -630,
            z: -205,
            text: "SlipperyButtons's\nisland",
            type: '',
        }),
        point({
            x: -304,
            z: -142,
            text: "Floating\nislands",
            type: '',
        }),
        point({
            x: -334,
            z: -86,
            text: "Underwater\narena",
            type: '',
        }),
        point({
            x: -460,
            z: 149,
            text: "Hotflash's\nbase",
            type: 'base',
        }),
        point({
            x: -711,
            z: 130,
            text: "Hotflash's\ngunpowder/iron\nfarm",
            type: 'farm',
        }),
        point({
            x: 17,
            z: 157,
            text: "Flucky\nthe duck",
            type: '',
        }),
        point({
            x: -285,
            z: 92,
            text: "Most\nAwesome\nTown",
            type: '',
        }),
        point({
            x: -243,
            z: 229,
            text: "MJS166's\nwizard's\ntower",
            type: '',
        }),
        point({
            x: -200,
            z: 197,
            text: "MJS166's\nbase",
            type: 'base',
        }),
        point({
            x: -128,
            z: 213,
            text: "Tiny\nwee\ncastle",
            type: '',
        }),
        point({
            x: 343,
            z: 705,
            text: "The\nend\nportal",
            type: '',
        }),
        point({
            x: -368,
            z: 890,
            text: "The wither\nkilling fields",
            type: '',
        }),
        point({
            x: -211,
            z: -605,
            text: "Island life\nsubway stop\nmake your dreams\na reality",
            type: 'subway',
        }),
        point({
            x: -277,
            z: -18,
            text: "digitalsadhu's\nunderwater\nbase",
            type: 'base',
        }),
        point({
            x: -243,
            z: -17,
            text: "lighthouse\nof\ndreams",
            type: '',
        }),
        point({
            x: -138,
            z: 565,
            text: "Happypig102's\nbase",
            type: 'base',
        }),
        point({
            x: -302,
            z: -852,
            text: "BamseJoM's\nbase",
            type: 'base',
        }),


        // do not delete the following two closing brackets
    ]
}
