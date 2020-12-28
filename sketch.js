
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	wood1 = createSprite(650,740,200,20);
	wood1.shapeColor= ("red")

	wood2 = createSprite(550,700,20,100);
	wood2.shapeColor= ("red")

	wood3 = createSprite(750,700,20,100);
	wood3.shapeColor= ("red")

	paper1 = new paper(200,700)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper1.display();
}
function keyPressed(){
}


