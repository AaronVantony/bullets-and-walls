var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 20, 10);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var derformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(derformation>10){
      wall.shapeColor=color(255,0,0); 
    }
    if(derformation<10){
      wall.shapeColor=color(0,255,0); 
    }
  }
  

  drawSprites();
}
function hasCollided(lbullet,lwall){
  var bulleRrightEdge=lbullet.x+lbullet.width;
  var wallLeftEdge=lwall.x;
  if(bulleRrightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}