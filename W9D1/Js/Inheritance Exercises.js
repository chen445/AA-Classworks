Function.prototype.inherits = function(SuperClass){
    function Surrogate(){}
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


function MovingObject(name) {
    this.name = name;
}
    MovingObject.prototype.hello = function(){
        console.log(`${this.name}!!!`)
    }

function Ship (name) {
    this.name= name;
}
Ship.inherits(MovingObject);

function Asteroid (name) {
    this.name = name
}
Asteroid.inherits(MovingObject);


// const cat1 = new MovingObject("cat1");

// const cat2 = new Ship("cat2");

// const cat3 = new Asteroid("cat3");