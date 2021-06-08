const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division = [];

var divisionHeight=300;

var score = 0;
var particle
var turn = 0;
var gameState = "play"
var gameState = "end"
var yellowline 

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,375));
    }

   // yellowline = new Ground(400,400,800,20);

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
  text("Score : "+score,20,30);
  Engine.update(engine);
  noStroke();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   if (particle!=null){
    particle.display();

    if (particle.body.position.y>760){
       
      if (particle.body.position.x<300){

        score=score+500;
        particles=null;
        
          if(count>=5)gameState = "end";

      }
    }
   }

   if (particle!=null){
    particle.display();

   if (particle.body.position.y>760){
       
    if (particle.body.position.x>301){

      score=score+100;
      particles=null;
      
        if(count>=5)gameState = "end";

    }
  }
 }

 if (particle!=null){
  particle.display();

 if (particle.body.position.y>760){
     
  if (particle.body.position.x>601){

    score=score+200;
    particles=null;
    
      if(count>=5)gameState = "end";

  }
}
}

} 

function mousePressed(){
 if(gameState !== "end"){
   count++;
    particles = new Particle(mouse,10,10,10)
 }
}
