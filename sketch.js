
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var pa;
var wall1,wall2,wall3



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    pa=new paper(200,200,60,30)
	wall1=new ground(1600,350,20,700);
	wall1.fill="green"
	wall2=new ground(10,350,20,700);
	wall3=new ground(width/2,30,width,20);

	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  pa.display();
  wall1.display()
 wall2.display()
 wall3.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(pa.body,pa.body.position,{x:90,y:-90});
  
	}
}


