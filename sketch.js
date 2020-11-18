var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  ground = createSprite(200,360,800,10);
  monkey = createSprite(200,320,40,40);
  monkey.addAnimation("monkey?",monkey_running);
  monkey.scale = 0.1;
  score = 0;
  
}


function draw() {
  background("white");
  frameRate = 25;
  //infinite movement
  ground.velocityX = -20;
  if(ground.x < 0) {
    ground.x = ground.x = ground.width/2;
  }
  
  //movement
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  //gravity
  monkey.velocityY += 0.8;
  monkey.collide(ground);
  
  //score
  score = Math.ceil(frameCount/frameRate);
  text("Surival time: "+score,150,20)
  
  drawSprites();
  bananas();
  obstacles();
}
function bananas() {
  if(frameCount%80===0) {
    var rand = Math.round(random(120,200));
    banana = createSprite(410,rand,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 150;
  }
}
function obstacles() {
  if(frameCount%300===0) {
    obstacle = createSprite(410,340,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 150;
    obstacle.scale = 0.1;
  }
}