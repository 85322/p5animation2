var moveRectX = 100;
var posX = -200;

function setup (){
  createCanvas (400, 400, WEBGL);
  
}

function draw(){
  background(0,0,50);
  strokeWeight(3, 204, 0);
  stroke(50);
  fill(255, 150, 0)
  circle(-100, 0, 20);
  ellipse(150, 100, 50, 25);
  line(-150, 150, 100, 0);

  
  rect(posX, -200, 25, 25);
  posX+=1;
  
  if (posX > 170){
    posX = -200;
  }

  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  box(50);
  fill(255, 0, 0);
  rect(40, 40, 50, 50);
}
