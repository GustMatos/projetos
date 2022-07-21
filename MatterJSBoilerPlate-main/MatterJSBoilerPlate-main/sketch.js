
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide, rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restituition:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball)
	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(1350, 600, 20, 120)
	Engine.run(engine);
	
  
}


function draw() {
  
  background(0);

	ground.display()
	leftSide.display()
	rightSide.display()
	ellipse(ball.position.x, ball.position.y, radius, radius)
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


