var re, square;

function setup() {
  createCanvas(800,400);
square=createSprite(400, 200, 50, 50);
square.shapeColor=("purple");
 re=createSprite(100,100,20,70);
 re.shapeColor=("pink");
}

function draw() {
  background(255,255,255);

re.x=World.mouseX; 
re.y=World.mouseY;
if(square.x-re.x<square.width/2+re.width/2&&
  square.y-re.y<square.height/2+re.height/2&&
  re.x-square.x<square.width/2+re.width/2&&
  re.y-square.y<square.height/2+re.height/2){
square.shapeColor=("red");
re.shapeColor=("red");

}
  drawSprites();
}