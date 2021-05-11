console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas');
    canvas.width=640;
    canvas.height=640;
    const ctx = canvas.getContext('2d');
    window.ctx= ctx;
    const mo = new MovingObject({
        pos: [300, 30],
        vel: [0, 50],
        radius: 5,
        color: "#00FF00"
    });
    window.mo=mo;
});