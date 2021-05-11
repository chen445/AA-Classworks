function MovingObject(options){
    this.pos = options['pos'];
    this.vel = options['vel'];  // [horiz, vert]
    this.radius = options['radius'];
    this.color = options['color'];
}


MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,true);
    ctx.fill();
}

// MovingObject.prototype.move = function(ctx) {

// }


const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

// every 1 sec

// at 1 sec :  pos_new [40,40]
// at 2 sec: pos_new[50, 50]

// canvas = 640 x 480
// if pos[0] > 640
// pos[0] = 0


// def up
// vel[1] += 10



module.exports = MovingObject;



// // Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

// NavigationPreloadManager(vel) = Dist (pos, new_pos)

// // this is math, not JavaScript

// // Dist([x_1, y_1], [x_2, y_2]) = sqrt(  (x_1 - x_2) ** 2 + (y_1 - y_2)** 2)
// // Dist( pos1, pos2  )
// [velx, vely]

// Norm ( vel ) = Dist (pos0, pos1)

// Dist(pos0, pos1) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)


// Norm(vel) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)

// Norm(vel) ^ 2 = (pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2