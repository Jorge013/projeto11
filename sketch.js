//variáveis necessárias

//garoto
var boy, boyImg

//rua
var path, pathImg

//paredes laterais 
var leftBoundary, rightBoundary;


function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}


function setup() {
  createCanvas(400, 400);

  //Movendo o fundo, conforme está no projeto

  path=createSprite (200,200);
  path.addImage(pathImg);
  path,velocityY = 4;
  path.scale=1.2;

  //criando menino que corre
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);

  // criando Boundary (Limite) esquerdo
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //criando Boundary direito
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // menino se movendo no eixo X com o mouse, conforme está no projeto

    boy.x = World.mouseX;

    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
  //código para reiniciar o fundo, conforme está no projeto

if (path.y>400) {

  path.y = 0;
}


  drawSprites();
}
