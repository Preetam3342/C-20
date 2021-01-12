var a,b;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,200,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green";
}

function draw() {
  console.log(a.x-b.x)
  a.x = mouseX;
  a.y = mouseY;
  if(a.x-b.x<49 && b.x-a.x<49){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  background(255,255,255);  
  drawSprites();
}