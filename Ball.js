class Ball {
    constructor(x,y,width,height){
        var options = {
            
            frictionAir:0.004,
            density:1
        }
        this.width = width; 
        this.height = height; 
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("black");
        fill("orange");
        ellipse(0,0,this.width,this.height);
        pop();   
    }
}