var navioImg,navio,seaImage,sea;
function preload() {
  
 navioImg=loadAnimation("ship-1.png", "ship-2.png") 
 seaImage=loadImage("sea.jpg") 

}
function setup() {
  createCanvas(600,300);
  
  navio=createSprite(70,180,20,20)
  navio.addAnimation("sea",navioImg)
  navio.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;
sea.visible=false
}
function draw() {
  
  background(seaImage)
  if (keyDown("space")) {
    navio.velocityY = -10;
}

navio.velocityY = navio.velocityY + 0.8

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

navio.collide(sea);
drawSprites() 
  
}  
