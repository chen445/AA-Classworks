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

// const TIME = 1000/60
MovingObject.prototype.move = function() {
    
    const that = this;
    console.log(this.vel);

    setInterval(function(){
        let oldPos=that.pos
        that.pos = [that.pos[0]+that.vel[0],that.pos[1]+that.vel[1]];
        if(that.pos[0]>320){
            that.pos[0]=4;
        }else if(that.pos[0]<0){
            that.pos[0]=316;
        }
        if(that.pos[1]>320){
            that.pos[1]=4;
        }else if(that.pos[1]<0){
            that.pos[1]=316;
        }
        that.remove(ctx,oldPos,that)
        that.draw(ctx);
    },10)
}

MovingObject.prototype.remove =function(ctx,oldPos,object){
    ctx.fillStyle = '#ccddff';

    ctx.beginPath();
    ctx.arc(oldPos[0],oldPos[1],object.radius+2,0,2*Math.PI,true);
    ctx.fill();
    // let rad=object.radius;
    // ctx.clearRect(oldPos[0]-rad,oldPos[1]-rad,rad*2,rad*2);
}


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