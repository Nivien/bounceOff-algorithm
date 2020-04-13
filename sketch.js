var movingRect;
var fixedRect;

var topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200,100, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  fixedRect.velocityX = -5;
  movingRect = createSprite(200,300,100,50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  movingRect.velocityX = 5;

  topEdge =createSprite (600,0,1200,20);
  bottomEdge = createSprite(600,400,1200,20);
  leftEdge = createSprite(0,200,20,400);
  rightEdge = createSprite(1200,200,20,400);
}

function draw() {
  background("black");  

 // bounceOff(movingRect, fixedRect);
  /*bounceOff(movingRect, topEdge);
  bounceOff(movingRect, bottomEdge);
  bounceOff(movingRect, leftEdge);
  bounceOff(movingRect, rightEdge);
  bounceOff(fixedRect, topEdge);
  bounceOff(fixedRect, bottomEdge);
  bounceOff(fixedRect, rightEdge);
  bounceOff(fixedRect, leftEdge);*/

  drawSprites();
}

function bounceOff(object1 , object2){

  if((object1.x - object2.x) < (object1.width/2 + object2.width/2) &&
  (object2.x - object1.x) < (object1.width/2 + object2.width/2) 
  ){

    object1.velocityX = - object1.velocityX;

    object2.velocityX = - object2.velocityX;


}
 
if((object1.y - object2.y) < (object1.height/2 + object2.height/2) && 
(object2.y - object1.y) < (object1.height/2 + object2.height/2)){

  object1.velocityY = - object1.velocityY ;
  object2.velocityY = - object2.velocityY ;
}
}
