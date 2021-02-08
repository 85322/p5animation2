function setup (){
  createCanvas (400, 400, WEBGL);
}

function draw(){
  background(0,0,0);
  fill(255);
  noStroke();
  fill(255, 150, 0)
  
  rect(50, 100, 50, 50);
  circle(30, 350, 20);
  ellipse(150, 100, 50, 25);
  line(30, 20, 85, 75);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
}
