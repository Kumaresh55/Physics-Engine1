const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options=
  {
    isStatic:true
  }
  ground = Bodies.rectangle(400, 390, 800, 20, options);
  World.add(world, ground);
  box1 = new boxes(400, 200, 50, 50);
  box2 = new boxes(370, 100, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
  box1.display();
  box2.display();
  
}