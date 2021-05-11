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

    const astA = new Asteroid();

    const astB = new Asteroid();

    const astC = new Asteroid();
    
    window.mo=mo;
    window.astA = astA;
    window.astB = astB;
    window.astC = astC;
});