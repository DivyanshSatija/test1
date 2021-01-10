var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
car =  createSprite(200, 200, 50, 50);
wall = createSprite(1200,200,60,100);
wall.shapeColor = color("white");


speed = random(25,31);
weight = random(400,1500);
car.velocityX = speed;  
}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2);
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed/22500;
    if(deformation>180);
    {
      car.shapeColor = color(255,0,0);
      wall.shapeColor = color("white");
    }
    if(deformation<180 && deformation>100);
    {
      car.shapeColor = color(230,230,0);
      wall.shapeColor = color("white");
    }
    if(deformation<100);
    {
      car.shapeColor = color(0,255,0);
      wall.shapeColor = color("white");
    }
  }
  drawSprites();
}
