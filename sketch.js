
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3
var ground
var paper
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 = new Box(900,650,150,20)
box2 = new Box(830,585,20,150)
box3 = new Box(970,585,20,150)


ground=new Ground(600,670,1200,20)

paper = new Paper(100,130,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  paper.display()
  drawSprites();
 
}

function keyPressed() {
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:10,y:-10})
}



}

