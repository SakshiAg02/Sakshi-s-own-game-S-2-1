const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ruhaan,ruhaan_img,ruhaan_ani;
var spikes,spikes_img;
var brick1,brick2,brick3,brick_img;

function preload(){
   
  spikes_img = loadImage("image/spikes.png")
  brick_img = loadImage("image/brick.png")
   ruhaan_img = loadAnimation("Ruhaan_Animation/Ruhaan 1.png")
   ruhaan_ani = loadAnimation("Ruhaan_Animation/Ruhaan 1.png","Ruhaan_Animation/Ruhaan 2.png",
                               "Ruhaan_Animation/Ruhaan 3.png","Ruhaan_Animation/Ruhaan 4.png",
                               "Ruhaan_Animation/Ruhaan 5.png","Ruhaan_Animation/Ruhaan 6.png",
                               "Ruhaan_Animation/Ruhaan 7.png","Ruhaan_Animation/Ruhaan 8.png",
                               "Ruhaan_Animation/Ruhaan 9.png","Ruhaan_Animation/Ruhaan 10.png",
                               "Ruhaan_Animation/Ruhaan 11.png","Ruhaan_Animation/Ruhaan 12.png")
                               
}

function setup(){

    createCanvas (1365,645)
    engine = Engine.create()
    world = engine.world;

    spikes = createSprite(800,620,2000,55)
    spikes.addImage(spikes_img)
    spikes.scale = 1

    brick1 = createSprite(250,490,100,35)
    brick1.addImage(brick_img)
    brick1.scale = 0.15

    brick2 = createSprite(450,400,100,35)
    brick2.addImage(brick_img)
    brick2.scale = 0.15

    brick3 = createSprite(650,310,100,35)
    brick3.addImage(brick_img)
    brick3.scale = 0.15

    brick4 = createSprite(850,220,100,35)
    brick4.addImage(brick_img)
    brick4.scale = 0.15

    brick5 = createSprite(1050,310,100,35)
    brick5.addImage(brick_img)
    brick5.scale = 0.15

    brick6 = createSprite(1250,220,200,35)
    brick6.shapeColor = "#9f4c00"

ruhaan = createSprite(100,500,50,50)
ruhaan.addAnimation("standing",ruhaan_img)
ruhaan.addAnimation("running",ruhaan_ani)
ruhaan.scale = 0.25

invisibleGround = createSprite(800,620,2000,55)
  invisibleGround.visible = false;
}

function draw(){

background("#BC4A3C");
Engine.update(engine);

if (keyDown("a")) {
    ruhaan.x = ruhaan.x - 5;
  }
  if (keyDown("d")) {
    ruhaan.x = ruhaan.x + 5;
  }
  if(keyDown("space")&& ruhaan.y >= 100) {
    ruhaan.y+=1
}
ruhaan.velocityY = ruhaan.velocityY + 0.8
ruhaan.collide(invisibleGround);
ruhaan.collide(brick1)
ruhaan.collide(brick2)
ruhaan.collide(brick3)
ruhaan.collide(brick4)
ruhaan.collide(brick5)
ruhaan.collide(brick6)
  
drawSprites();
}




