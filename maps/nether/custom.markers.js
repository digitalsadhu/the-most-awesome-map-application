/*
This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.
*/

const PINS = {
    portal: 'other.png',
    farm: 'farm.png',
    other: 'other.png',
    base: 'player-base.png',
    subway: 'subway-stop.png',
    netherice: 'netherice-stop.png',
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
        point({
            x: -25,
            z: -878,
            text: "Froglight farm",
            type: 'farm',
        }),
        point({
            x: -8,
            z: 30,
            text: "Home",
            type: 'netherice',
        }),
        point({
            x: -385,
            z: 1147,
            type: "farm",
            text: "Wither skeleton farm",
        }),
        // do not delete the following two closing brackets
    ]
}




