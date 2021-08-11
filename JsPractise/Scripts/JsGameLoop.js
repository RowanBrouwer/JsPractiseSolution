"use strict";
let canvas;
let context;
let rectX = 0;
let rectY = 0;
let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;
let timePassed = 0;

window.onload = init;

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    window.requestAnimationFrame(gameLoop);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100)
};

function update(secondsPassed) {

    timePassed += secondsPassed

    rectX = easeInOutQuint(timePassed, 50, 500, 1.5);
    rectY = easeLinear(timePassed, 50, 250, 1.5);
}

function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

function easeLinear(t, b, c, d) {
    return c * t / d + b;
}

function gameLoop(timeStamp) {

    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    secondsPassed = Math.min(secondsPassed, 0.1);

    update(secondsPassed);
    draw();

    window.requestAnimationFrame(gameLoop);
}