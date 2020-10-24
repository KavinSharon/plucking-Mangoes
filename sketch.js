
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 var boyImage;
 var ground,mango1,mango2,mango3,mango4,mango5,mango6,tree,string,stone;
function preload()
{
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(displayWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(displayWidth/2,700,displayWidth,20);
	 tree = new Tree(displayWidth-250,450);
	 mango1 = new Mango(displayWidth-250,400);
	 mango2 = new Mango(displayWidth-250,250);
	 mango3 = new Mango(displayWidth-250,350);
	 mango4 = new Mango(displayWidth-50,350);
	 mango5 = new Mango(displayWidth-400,300);
	 mango6 = new Mango(displayWidth-400,400);
	 stone = new Stone(displayWidth/4,550,35);
	 string = new String(stone.body,{x:displayWidth/4+30,y:620});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  image(boyImage,displayWidth/4,580,150,150)
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  string.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 string.fly();
}
  
function keyPressed(){
	if(keyCode === 32){
		string.attach(stone.body);
	}
}

function detectCollision(lStone,lMango)
{
  mangoBodyPosition = lMango.body.position
  stoneBodyPosition = lStone.body.position
  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-lMango.r+lStone.r){
    Matter.Body.setStatic(lMango.body,false);
  }
}