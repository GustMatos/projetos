
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shape1
var shape2
var shape3
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var shape_options = {
		restitution:0.5,
		friction:0.02,
}
var ground_options = {
	isStatic: true
}

	//Crie os Corpos Aqui.
 shape1 = Bodies.circle(220,10,100,shape_options)
 World.add(world, shape1);

 shape2 = Bodies.circle(220,10,100,shape_options)
 World.add(world, shape2);

 shape3 = Bodies.circle(220,10,100,shape_options)
 World.add(world, shape3);

 ground = Bodies.rectangle(300, 600, 600, 1, ground_options)
 World.add(world, ground);

	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
  background(0);
  ellipse(shape1.position.x, shape1.position.y, 100)
  ellipse(shape2.position.x, shape2.position.y, 100)
  ellipse(shape3.position.x, shape3.position.y, 100)
  rect(ground.position.x, ground.position.y, 600, 1)
  drawSprites();
 
}



