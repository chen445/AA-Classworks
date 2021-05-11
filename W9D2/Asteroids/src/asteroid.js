const MovingObject = require('./moving_object.js')
const Util = require('./utils.js')

const COLOR = 'dark grey';
const RADIUS = 25;

function Asteroid(options) {
    this.pos = Game.randomPos(640, 640)
    this.vel = Util2.randomVec(25);  
    this.RADIUS;
    this.COLOR;
    MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject)


Asteroid.color
