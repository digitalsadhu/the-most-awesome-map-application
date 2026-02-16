/*
This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.
*/

const PINS = {
    farm: 'farm.png',
    other: 'other.png',
    city: 'city.png',
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
        // point({
        //     x: 758,
        //     z: 252,
        //     text: "New Flork",
        //     type: 'city',
        // }),
        // do not delete the following two closing brackets
    ]
}
