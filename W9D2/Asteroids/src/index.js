console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const Util = require("./utils.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.Util = Util;

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas');
    canvas.width=320;
    canvas.height=320;
    const ctx = canvas.getContext('2d');
    window.ctx= ctx;

    ctx.fillStyle='#ccddff';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,320);
    ctx.lineTo(320,320);
    ctx.lineTo(320,0);
    ctx.closePath();
    ctx.fill();
   

    const mo = new MovingObject({
        pos: [300, 30],
        vel: [0, 50],
        radius: 5,
        color: "green"
    });

    const astA = new Asteroid();

    const astB = new Asteroid();

    const astC = new Asteroid();
    
    window.mo=mo;
    window.astA = astA;
    window.astB = astB;
    window.astC = astC;
});