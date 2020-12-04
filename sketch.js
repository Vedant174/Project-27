
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,345,190,20);
	bobObject1 = new Bob(320,500,35);
	bobObject2 = new Bob(355,500,35);
	bobObject3 = new Bob(390,500,35);
	bobObject4 = new Bob(425,500,35);
	bobObject5 = new Bob(460,500,35);
	bobObject6 = new Bob(495,500,35);	
	
	chain1 = new Chain(bobObject1.body, {x:320,y:345});
	chain2 = new Chain(bobObject2.body, {x:355,y:345});
	chain3 = new Chain(bobObject3.body, {x:390,y:345});
	chain4 = new Chain(bobObject4.body, {x:425,y:345});
	chain5 = new Chain(bobObject5.body, {x:460,y:345});
	chain6 = new Chain(bobObject6.body, {x:495,y:345});


	Engine.run(engine);
  
    

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  //bobObject6.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  //chain2.display();

 //strokeWeight(3);
  //line(chain1.body.position.x, chain1.body.position.y, constrainedLog.body.position.x, constrainedLog.body.position.y);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}



