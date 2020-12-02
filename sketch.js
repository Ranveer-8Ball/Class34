const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var ball;
var rope;
var gameState = "onrope";
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900,100,70,70);
  box2 = new Box(980,100,70,70);
  box3 = new Box(1060,100,70,70);
  box4 = new Box(1140,100,70,70);
  box5 = new Box(900,180,70,70);
  box6 = new Box(980,180,70,70);
  box7 = new Box(1060,180,70,70);
  box8 = new Box(1140,180,70,70);
  box9 = new Box(900,260,70,70);
  box10 = new Box(980,260,70,70);
  box11 = new Box(1060,260,70,70);
  box12 = new Box(1140,260,70,70);

  ground = new Ground(800,800,900,30);

  ball = new Ball(500,100,40,40);
  rope = new Rope(ball.body,{x:400,y:350});
}

function draw() {
  background(180);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  ground.display();

  ball.display();
  rope.display();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      //}
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}
