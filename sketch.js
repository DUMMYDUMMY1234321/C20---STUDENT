var fix, move;
function setup() {
  createCanvas(1600,800);

  fix = createSprite(400,300,80,90);
  move = createSprite(700,200,80,90);

  fix.shapeColor = "green";
  move.shapeColor = "green";

  fix.debug = true;
  move.debug = true;
  
}

function draw() {
  background(0);  

  move.x = mouseX;
  move.y = mouseY;

  

  drawSprites();
}