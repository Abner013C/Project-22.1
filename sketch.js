//declaracion de variables
var bgImg;
var fairy , fairyImg, gMusic;
var star, starBody, starImg;
var xtrastar, xtrastarImg;

//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//carga de imagenes
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	gMusic = loadSound("sound/JoyMusic.mp3");
	xtrastarImg= loadImage("images/starImage.png");
}

function setup() {
	createCanvas(800, 750);

	//reporducir sonido
	gMusic.play();

	//sprite del hada
	fairy = createSprite(130, 510);
	fairy.addAnimation("fm",fairyImg);  
	fairy.scale =0.2;

	//sprite de la estrella
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //console.log(star.y);

  //la estrella se detiene a la altura de la mano del hada
  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }
  
  //condicion de movimineto para el hada
  keyPressed();
  
  //estrellas cayendo del cielo, no tiene funcionalidad
  morestarsss();

  drawSprites();
}

function keyPressed() {
	if(keyIsDown(RIGHT_ARROW)){
        fairy.x = fairy.x +6.5;
	}
    if(keyIsDown(LEFT_ARROW)){
        fairy.x = fairy.x -6.5;
	}
	if(keyIsDown(DOWN_ARROW)) {
	    Matter.Body.setStatic(starBody,false); 
	}
}

function morestarsss(){
    if(frameCount%55 == 0){
		xtrastar= createSprite(Math.round(random(50,750)),-50);
		xtrastar.addImage(xtrastarImg);
		xtrastar.scale= 0.04
		xtrastar.velocityY= 6;
		xtrastar.lifetime= 400;
	}
}