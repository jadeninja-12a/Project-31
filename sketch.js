const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;
var ground
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;
var a, b, c, d;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k = 0; k <= width; k += 80 ){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }
  ground = new Ground(width/2, height - 10, width, 10)
  // a = createSprite(width/2, height, width, 10);
  // b = createSprite(width/2, 0, width, 10);
  // c = createSprite(width, height/2, 10, height);
  // d = createSprite(0, height/2, 10, height);
  // a.shapeColor = "red";
  // b.shapeColor = "red";
  // c.shapeColor = "red";
  // d.shapeColor = "red";
  for(var j = 40; j <= width; j += 50){
   plinkos.push(new Plinko(j, 75)); 
  }
  for(var j = 15; j <= width - 10; j += 50){
    plinkos.push(new Plinko(j, 175)); 
  }
  for(var j = 40; j <= width; j += 50){
    plinkos.push(new Plinko(j, 275)); 
   }
   for(var j = 15; j <= width - 10; j += 50){
     plinkos.push(new Plinko(j, 375)); 
   }  
}

function draw() {
  background(0); 

  if(frameCount%90 == 0){
    particles.push(new Particle(random(width/2 - 50, width/2 + 50), 10, 10));
  }

  ground.display();

  
  Engine.update(engine);
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }


  drawSprites(); 
}