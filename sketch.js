var woman1
var womanc

function preload(){
woman1= loadAnimation("woman1.png","woman2.png","woman3.png")
background1= loadImage("background.jpg");
}

function setup() {
createCanvas(400,400);   
path=createSprite(0,0,600,600);
path.addImage(background1);
path.scale=2.4
path.velocityX=-2;


 womanc=createSprite(50,300,20,50);
 womanc.addAnimation("womanc",woman1);
 womanc.scale=0.4
} 

function draw() {
   background(0);
   path.velocityX=-5;
if(path.X<0)
{
    path.x=path.width/2
}
if(keyDown("UP_ARROW"))
{
    womanc.velocityY=2
}
if(keyDown("DOWN_ARROW"))
{
    womanc.velocityY=-2
}
 drawSprites();

}