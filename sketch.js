function setup() {
  createCanvas(600, 400);
  background("pink");
}

function draw() {
  stroke("red");
  fill("blue");
if(mouseIsPressed){
  rect(mouseX , mouseY ,40 ,40 );
}
}