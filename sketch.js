var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground;
var car;
var enemycar,enemycar2,enemycar3;
var reset,gameOver;



function preload (){
track1 = loadImage("track.jpg")
car1 = loadImage("car3.png")
car2 = loadImage("car2.png")
car3 = loadImage("car4.png")
cae = loadImage("car1.png");
rese = loadImage("restart.png")
gamever = loadImage("gameOver.png")



}


function setup(){
var canvas = createCanvas(400,600);
score = 0
ground = createSprite(200,395,400,10);
ground.addImage("track",track1)
ground.velocityY =6
ground.y = ground.height/100

car = createSprite(200,300,10,10);
car.addImage("car",cae);

CarsGroup1 = new Group();
CarsGroup2 = new Group();
CarsGroup3 = new Group();

reset1 = createSprite(200,400,10,10);
reset1.addImage("restart",rese);
reset1.visible = false;

gameOver = createSprite(200,300,10,10);
gameOver.addImage("over",gamever);
gameOver.visible = false;


textFont(BOLD);
textSize(20);

}
function draw(){
background(20)
if(gameState === PLAY){
  if(ground.y > 400){
    ground.y = ground.height/100
  
  }

  score = score + Math.round(getFrameRate()/60);
  text("score:"+score,50,50)

  car.x = World.mouseX;
  car.y = World.mouseY;

  spawnCars();

  if(CarsGroup1.isTouching(car)){
    gameState = END;
  }

  if(CarsGroup2.isTouching(car)){
    gameState = END;
  }

  if(CarsGroup3.isTouching(car)){
    gameState = END;
  }
}else if(gameState === END){

  ground.velocityY = 0;
CarsGroup1.setVelocityYEach(0);
CarsGroup2.setVelocityYEach(0);
CarsGroup3.setVelocityYEach(0);

CarsGroup1.setLifetimeEach(-1);
CarsGroup2.setLifetimeEach(-1);
CarsGroup3.setLifetimeEach(-1);

reset1.visible = true;
gameOver.visible = true;

if(mousePressedOver(reset1)){
  reset();
}


}





//car.debug = true;





drawSprites();
text("score:"+score,50,50)


}

function spawnCars(){
if(World.frameCount%70 === 0){
 enemycar = createSprite(0,0,10,10);
enemycar.addImage("car1",car1)
enemycar.x = Math.round(random(0,400));
enemycar.velocityY = 6;
CarsGroup1.add(enemycar);
enemycar.depth = car.depth;
}

if(World.frameCount%60 === 0){
   enemycar2 = createSprite(0,0,10,10);
  enemycar2.addImage("car2",car2)
  enemycar2.x = Math.round(random(0,400));
  enemycar2.velocityY = 6;
  CarsGroup2.add(enemycar2);
  enemycar2.depth = car.depth;

  }

  if(World.frameCount%60 === 0){
     enemycar3 = createSprite(0,0,10,10);
    enemycar3.addImage("car3",car3)
    enemycar3.x = Math.round(random(0,400));
    enemycar3.velocityY = 6;
    CarsGroup3.add(enemycar3);
    enemycar3.depth = car.depth;

    }
  

}

function reset(){
gameState = PLAY;
reset1.visible = false;
gameOver.visible = false;
CarsGroup1.destroyEach();
CarsGroup2.destroyEach();
CarsGroup3.destroyEach();
ground.velocityY = 6;
score = 0;

}