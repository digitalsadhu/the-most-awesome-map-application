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
    netherice: 'netherice-stop.png',
    trialChamber: 'trial-chamber.png',
    disassembledTrialChamber: 'disassembled-chambers.png',
    village: 'village.png',
}

const point = (data) => {
    return {
        image: PINS[data.type] || 'other.png',
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
        point({
            x: -13,
            z: 376,
            text: "South",
            type: 'netherice',
        }),
        point({
            x: -15,
            z: 662,
            text: "Great Southern Ocean",
            type: 'netherice',
        }),
        point({
            x: -343,
            z: 1189,
            text: "Deep Down Diamonds",
            type: 'netherice',
        }),
        point({
            x: -21,
            z: 1174,
            text: "Geode",
            type: 'netherice',
        }),
        point({
            x: 732,
            z: 640,
            text: "The Forgotten Forest",
            type: 'netherice',
        }),
        point({
            x: -636,
            z: 655,
            text: "The Forbidden Lands",
            type: 'netherice',
        }),
        point({
            x: -438,
            z: 380,
            text: "Kensington Falls",
            type: 'netherice',
        }),
        point({
            x: -117,
            z: -353,
            text: "Northern Ocean",
            type: 'netherice',
        }),
        point({
            x: -14,
            z: -928,
            text: "The Northern Frontier",
            type: 'netherice',
        }),
        point({
            x: 218,
            z: 42,
            text: "East",
            type: 'netherice',
        }),
        point({
            x: 726,
            z: 34,
            text: "Razorback Hills",
            type: 'netherice',
        }),
        point({
            x: 730,
            z: 475,
            text: "Principalities of Shar",
            type: 'netherice',
        }),
        point({
            x: -417,
            z: 41,
            text: "West",
            type: 'netherice',
        }),
        point({
            x: -738,
            z: 37,
            text: "Westerly Rock",
            type: 'netherice',
        }),
        point({
            x: -745,
            z: -383,
            text: "Westport",
            type: 'netherice',
        }),
        point({
            x: -924,
            z: 59,
            text: "Acazniac Tribase",
            type: 'netherice',
        }),
        point({
            x: 758,
            z: 252,
            text: "Blaze\nFarm",
            type: 'netherice',
        }),
        // do not delete the following two closing brackets
    ]
}




