
var path,pathImg
var runner, runner_running;
var invisiblePath1, invisiblePath2;
var bomb, bomb1;
var coin, coin1;
var energyDrink, energyDrink1;
var power, power1;
function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-2.png", "Runner-1.png"); 
    bomb1 = loadImage("bomb.png");
    coin1 = loadImage("coin.png");
    energyDrink1 = loadImage("energyDrink.png");
    power1 = loadImage("power.png");
    pathImg= loadImage ("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    runner = createSprite(900, 475, 20, 20);
    runner.addAnimation("running", runner_running);
    runner.scale = 0.1;
   
    path=createSprite(200,200)
    path.addImage(pathImg)
    path.scale=0.5
     
    
}



function draw() {
  background("black");
   console.log(runner.x);
  
  
  //runner.collide(invisiblePath1);
  //runner.collide(invisiblePath2);
  
  drawSprites();
  }  










  
    
