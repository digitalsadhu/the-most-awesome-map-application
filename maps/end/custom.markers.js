/*
This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.
*/

const PINS = {
    farm: { image: 'farm.png', name: "Farm" },
    other: { image: 'other.png', name: "Miscellaneous" },
}

const point = (data) => {
    return {
        image: PINS[data.type]?.image || 'other.png',
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
            x: 236,
            z: -13,
            text: 'Ender ender',
            type: 'farm',
        }),
        point({
            x: 3,
            z: -220,
            text: 'Shulker farm',
            type: 'farm',
        }),
        // do not delete the following two closing brackets
    ]
}
