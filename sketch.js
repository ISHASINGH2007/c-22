const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1 =new Ground(200,380,400,40);
    box2=new Box(230,100,40,30);
    box3=new Box(220,110,40,30);
    box4=new Box(240,120,40,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.show();
    box2.display();
    box3.display();
    box4.display();
   
}