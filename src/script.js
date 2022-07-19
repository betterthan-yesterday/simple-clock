"use strict";

const secHand = document.getElementById("sec-hand");
const midHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

updateSec(secHand);
updateMin(midHand);
updateHour(hourHand);

function updateSec(image) {
    let date = new Date(Date.now());
    let angle = date.getSeconds() * 6;

    image.setAttribute("style", "transform: rotate(" + angle + "deg)");
    setTimeout(() => updateSec(image), 1000);
}

function updateMin(image) {
    let date = new Date(Date.now());
    let angle = date.getMinutes() * 6 + date.getSeconds() / 60;
   
    image.setAttribute("style", "transform: rotate(" + angle + "deg)");
    setTimeout(() => updateMin(image), 1000);
}

function updateHour(image) {
    let date = new Date(Date.now());
    let angle = date.getHours() * 6 + date.getMinutes() / 60 + date.getSeconds() / 3600;
   
    image.setAttribute("style", "transform: rotate(" + angle + "deg)");
    setTimeout(() => updateHour(image), 1000);
}