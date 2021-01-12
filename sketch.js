var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var ball;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(700,600);
//create 4 different surfaces
surface1=createSprite(90,585,150,20);
surface1.shapeColor="green"; 

surface2=createSprite(260,585,150,20);
surface2.shapeColor="red";

surface3=createSprite(435,585,150,20);
surface3.shapeColor="blue";

surface4=createSprite(610,585,150,20);
surface4.shapeColor="black";

//create box sprite and give velocity
ball=createSprite(random(20,750),300,30,30);
ball.shapeColor="white";
ball.velocityX=5;
ball.velocityY=4;
}

function draw() {
background(rgb(169,169,169));
//create edgeSprite
Edges = createEdgeSprites();
ball.bounceOff(Edges);
console.log(ball.shapeColor);
//ball.bounceOff(surface1 && surface2 && surface3 && surface4);
//add condition to check if box touching surface and make it box
if (surface1.isTouching(ball)&&ball.bounceOff(surface1)) {
ball.shapeColor="green";   
}

if (surface2.isTouching(ball)&&ball.bounceOff(surface2)) {
ball.shapeColor="red"; 
ball.velocityX=0;
ball.velocityY=0;
music.stop();
}

if (surface3.isTouching(ball)&&ball.bounceOff(surface3)) {
ball.shapeColor="blue";   
music.play();
}

if (surface4.isTouching(ball)&&ball.bounceOff(surface4)) {
ball.shapeColor="black";   
}

drawSprites();
}
