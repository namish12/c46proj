var player1, player2, background;
var player1Img, player2Img, backgroundImg;

function preload(){
  player1Img = loadImage("traffic.png");
  player2Img = loadImage("traffic2.png");
  backgroundImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1500,3000);


   player1 = createSprite(650, 2950, 50, 50);
   player1.addImage(player1Img);
   player1.scale = 0.1;

   player2 = createSprite(800, 2950, 50, 50);
   player2.addImage(player2Img)
   player2.scale = 0.1;
}

function draw() {
  background(backgroundImg);
  
  //controls
  if(keyDown("w")){
    player1.y -= 10;
  }

  if(keyDown("a")){
    player1.x -= 5;
  }

  if(keyDown("d")){
    player1.x += 5;
  }

  if(keyDown("i")){
    player2.y -= 10;
  }

  if(keyDown("j")){
    player2.x -= 5;
  }

  if(keyDown("l")){
    player2.x += 5;
  }

  //barrier
  if(player1.x >= 1100){
    player1.x -= 10;
  }

  if(player1.x <= 350){
    player1.x += 10;
  }

  if(player2.x >= 1100){
    player2.x -= 10;
  }

  if(player2.x <= 350){
    player2.x += 10;
  }

  camera.position.y = player1.position.y;
  camera.position.y = player2.position.y;


  drawSprites();
}