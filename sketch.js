
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("movinvg",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(400,360,900,10)
   ground.x = ground.width /2;
  ground.velocityX = -4;
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  
  invisibleGround = createSprite(440,370,900,10);
  invisibleGround.visible = false;
  
  
  
}


function draw() {
  background("white");
  
  
  if (ground.x < 200){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  spawn_obstacles();
  
   if(keyDown("space")&& monkey.y >= 120) {
        monkey.velocityY = -12;
      
    }
  
  var survivalTime=0;
  stroke=("black")
  textSize(20);
  fill=("black")
  survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime: "+survivalTime,100,50);
   monkey.velocityY = monkey.velocityY + 0.8
  
  food();
  
  drawSprites();
}

function spawn_obstacles(){
 if (frameCount % 300 === 0){
    obstacle = createSprite(600,320,10,40);
   obstacle.velocityX =-5;
   obstacle.addImage(obstacleImage);
   
             
    obstacle.scale = 0.2;
    obstacle.lifetime = 600;
   
 
    obstaclesGroup.add(obstacle);
 }
}

function food(){
 if (frameCount % 80 === 0){
    banana = createSprite(600,100,10,40);
   banana.y = Math.round(random(120,200));
   banana.velocityX =-10;
   banana.addImage(bananaImage);
   
   
            
    banana.scale = 0.1;
   banana.lifetime = 3000;
   
   
    foodGroup.add(banana);
 }
}
