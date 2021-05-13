const MovingObject = require('./moving_object.js')
const Util = require('./utils.js')

const CONSTANTS= {
    COLOR: 'darkgrey',
    RADIUS: 10
}

function Asteroid(options) {
    // options.pos = options.pos || Game.randomPos(640, 640)
    this.pos = Game.randomPos(320, 320)
    this.vel = Util.randomVec(1);  
    this.radius= CONSTANTS.RADIUS;
    this.color= CONSTANTS.COLOR;
    // MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject)


module.exports= Asteroid;