var ground, groundimage
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png')

  groundimage = loadAnimation('ground2.png')

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
 trex.addAnimation('running', trex_running)
trex.scale = 0.5


  ground = createSprite(200,180,400,50)
  ground.addAnimation('floor', groundimage)

  edges = createEdgeSprites()

}

function draw(){
  background("white")
  
  ground.velocityX = -2

  if (ground.x < 0){
    ground.x = ground.width/2
  }

  if (keyDown('space')){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5

  trex.collide(ground)

 

  //console.log(trex.y)
  console.log(ground.x)

  drawSprites();
}
