const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg;

function preload() {

    polygonImg = loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(650,500,1200,20);
support1 = new Ground(660,400,250,20);
support2 = new Ground(959,250,200,20);
block1 = new Box(655,395,30,40);
block2 = new Box(670,390,30,40);
block3 = new Box(680,390,30,40);
block4 = new Box(700,390,30,40);
block5 = new Box(720,390,30,40);
block6 = new Box(620,390,30,40);
block7 = new Box(610,390,30,40);
block8 = new Box(610,390,30,40);
block9 = new Box(690,350,30,40);
block10 = new Box(655,350,30,40);
block11 = new Box(650,350,30,40);
block12 = new Box(640,350,30,40);
block13 = new Box(645,310,30,40);
block14 = new Box(675,310,30,40);
block15 = new Box(660,270,30,40);
box1 = new Box(950,235,30,40);
box2 = new Box(970,235,30,40);
box3 = new Box(990,235,30,40);
box4 = new Box(1000,235,30,40);
box5 = new Box(930,235,30,40);
box6 = new Box(910,235,30,40);
box7 = new Box(930,195,30,40);
box8 = new Box(990,195,30,40);
box9 = new Box(948,195,30,40);
box10 = new Box(950,195,30,40);
box11 = new Box(975,155,30,40);
box12 = new Box(939,155,30,40);
box13 = new Box(960,115,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

sling1 = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background("white");
    Engine.update(engine);

ground.display();
support1.display();
support2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
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
sling1.display();

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged() {

	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased() {
	
		sling1.fly();
	
	}
	