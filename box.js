class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.5,
        'friction':0.3,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push ();
    translate (pos.x,pos.y);
    rotate (this.body.angle);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
