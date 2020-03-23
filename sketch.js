var Engine = Matter.Engine;
var  World = Matter.World;
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint;
var Body = Matter.Body;
 
var engine;
var world;
var slingShot;
 
function setup()
 {
   createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    ground = new Ground(400,590,800,20);
    platform1 = new Ground(100,250,200,20);
    platform2 = new Ground(700,350,200,20);

    box1 = new Box(50,215,50,50);
    box2 = new Box(100,215,50,50);
    box3 = new Box(150,215,50,50);
    box4 = new Box(75,165,50,50);
    box5 = new Box(125,165,50,50);
    box6 = new Box(100,115,50,50);

    box7 = new Box(750,315,50,50);
    box8 = new Box(700,315,50,50);
    box9 = new Box(650,315,50,50);
    box10 = new Box(725,265,50,50);
    box11 = new Box(675,265,50,50);
    box12 = new Box(700,215,50,50);

    box13 = new Box(50,555,50,50);
    box14 = new Box(100,555,50,50);
    box15 = new Box(150,555,50,50);
    box16 = new Box(75,505,50,50);
    box17 = new Box(125,505,50,50);
    box18 = new Box(100,455,50,50);

    
    ammo = new Ammo(400,400,40,40);

    slingshot = new Slingshot(ammo.body,{x:400,y:400})
  } 
 
function draw()
 {
    background("yellow");
    Engine.update(engine);
  
    textSize(20);
    text(" !!! PRESS SPACE TO RESET THE BALL !!!",225,40);

    ground.display();
    platform1.display();
    platform2.display();
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
   
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ammo.display();

    slingshot.display();
}

function mouseDragged()
  {
    Body.setPosition(ammo.body,{x: mouseX,y: mouseY});
  }
  
function mouseReleased()
{
  slingshot.fly();
} 

function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(ammo.body); 
  }
}

