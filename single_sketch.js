var moveRectX = 100;
let posX = -200;
let posY = -190;
let size = 25;
let colors = { 
  red: 0, 
  green: 0, 
  blue: 0 
};

let circle = {
  x: -100,
  y: -150,
  diameter: 30
};

let myFont;

function preload(){
  ExoBlack = loadFont('assets/Exo-Black.otf');
}




function setup (){
  createCanvas (600, 400, WEBGL);
  textSize(20);
  textFont(ExoBlack);
}

function draw(){
  let bgc = mouseX;
  background(bgc);
  strokeWeight(3);
  stroke(50);
  fill(255, 150, 0)
  ellipse(150, 100, 50, 25);
  line(-150, 150, 100, 0);
  rect(mouseX, mouseY, 50, 50);
  text("PosX: " + mouseX + "  PosY: "+ mouseY, -300, -185);
  fill (colors.red, colors.green, colors.blue);
  colors.red = Math.floor(Math.random()*255);
  colors.green = Math.floor(Math.random()*255);
  colors.blue = Math.floor(Math.random()*255);

  rect(posX, posY, size, size);
  posX++;

  if (posX > 175){
    posX = -200;
  }

  posY++;
 
  if (posY > 200){
    posY = -200;
  }

  size+=0.25;

  if (size > 55) {
    size = 25;
  }
  
  ellipse(circle.x, circle.y, circle.diameter);

  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  noFill();
  box(50);

  fill(255, 100, 10)
  rect(40, 40, 50, 50);

  
}
