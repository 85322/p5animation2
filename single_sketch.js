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
  x: -200,
  y: -150,
  diameter: 30
};

function preload(){
  ExoBlack = loadFont('assets/Exo-Black.otf');
}

let x = 0;
let y = 0;
let speedX = 3;
let speedY = 3;

function setup (){
  createCanvas (600, 400, WEBGL);
  textSize(20);
  textFont(ExoBlack);
}

function draw(){
  let b = 255;
  let r = map(mouseX, 0, 600, 0, 255);
  let g = map(mouseY, 0, 400, 0, 255);
  
  background(r, g, b);
  strokeWeight(3);
  stroke(50);
  fill( 255, 150, 0 )
  ellipse( 150, 100, 50, 25 );
  //line( -150, 150, 100, 0 );

  rect( x, y, 50, 50 );

  if (x > 250) {
    speedX = -3;
  } else if (x < -300) {
    speedX = random(1, 3);
  }

  if (y > 150) {
    speedY = -3;
  } else if (y < -200) {
    speedY = random(1, 3);
  }
  x = x + speedX;
  y = y + speedY;

  text("PosX: " + mouseX + "  PosY: "+ mouseY, -300, -185);
  fill (colors.red, colors.green, colors.blue);
  colors.red = Math.floor(Math.random()*255);
  colors.green = Math.floor(Math.random()*255);
  colors.blue = Math.floor(Math.random()*255);

  rect(posX, posY, size, size);
  posX++;

  if (posX > 175){
    posX = random(-300, width);
  }

  posY++;
 
  if (posY > 200){
    posY = random(-300, height);
  }

  size+=0.25;

  if (size > 55) {
    size = 25;
  }
  
  ellipse(circle.x, circle.y, circle.diameter);
  
  circle.x++;
   if (circle.x > width){
     console.log("Ball off the screen!");
     circle.x = -200;
    
   }
   
 
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  noFill();
  box(50);

  fill(255, 100, 10)
  rect(45, 40, 50, 50);

  
}
