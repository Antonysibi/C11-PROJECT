  var runner
  var path
  var runner_running
  var pathImg
  var invisibleGround1
  var invisibleGround2
  var runner_collided

  function preload(){
   //loading animations and images 
  pathImg = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");  
  }

  function setup(){
  createCanvas(400,400);

  //creating sprites and its properties
  path = createSprite(200,200);
  path.addImage(pathImg)
  path.scale = 1.2
  path.velocityY = -3
  runner = createSprite(200,200);
  runner.addAnimation("movingRunner",runner_running)
  runner.scale = 0.09

  //creating invisible ground 1,2
  invisibleGround1 = createSprite(411,200,10,400);
  invisibleGround1.visible = false
  invisibleGround2 = createSprite(1,200,10,400);
  invisibleGround2.visible = false
  }

  function draw() {
  background("red")

  if(path.y < 0){
    path.y = path.width/2
  }

  runner.x = World.mouseX

  //colliding runner with the invisible ground 1 and 2
  runner.collide(invisibleGround1);
  runner.collide(invisibleGround2);
  drawSprites();
  }