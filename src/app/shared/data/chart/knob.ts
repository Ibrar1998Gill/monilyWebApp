declare let require: any;
let Knob = require('knob');

let primary_color = localStorage.getItem('primary_color') || '#7366ff';

export let tron = Knob({
    value: 29,
    angleOffset: 90,
    thickness: 0.1,
    width: 200,
    cursor: true,
    fgColor: primary_color,
    readOnly: true,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
    skin: "tron",

})

export let profit = Knob({
    value: 35,
    left: 1,
    angleOffset: 90,
    className: "review",
    thickness: 0.1,
    width: 200,
    fgColor: primary_color,
    readOnly: true,
    dynamicDraw: true,
    tickColorizeValues: true,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
})

export let cursormode = Knob({
    value: 29,
    angleOffset: 90,
    thickness: 0.1,
    width: 200,
    cursor: true,
    fgColor: primary_color,
    readOnly: true,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
})

export let offsetArc = Knob({
    value: 35,
    angleOffset: -125,
    angleArc: 250,
    thickness: 0.1,
    width: 200,
    cursor: false,
    fgColor: primary_color,
    readOnly: true,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false
})

export let displayInputDisable = Knob({
    className: "review",
    thickness: 0.1,
    width: 200,
    fgColor: primary_color,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
})

export let displayPrevious = Knob({
    value: 44,
    min: -100,
    className: "review",
    thickness: 0.1,
    width: 200,
    fgColor: primary_color,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: true
})

export let digitstep = Knob({
    value: 0,
    className: "review",
    thickness: 0.1,
    step: 0.1,
    max: 10000,
    min: -10000,
    width: 200,
    fgColor: primary_color,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
})