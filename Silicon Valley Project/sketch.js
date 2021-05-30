var gameState="serve";
var garbage1, garbage2, garbage3, garbage4, g1Img, g2Img, g3Img, g4Img, garbageGroup1, garbageGroup2, garbageGroup3, garbageGroup4;
var ground;
var w1, w2, w3, w4, w5, w6, w7, w8, w9;
var o1, o2, o3, o4;
var score=0;

//To load all the images
function preload(){
  g1Img= loadImage("paperImg.png");
  g2Img= loadImage("plastic-bag.png");
  g3Img= loadImage("glass.png");
  g4Img= loadImage("metal.png");
}
//To create sprites objects and groups
function setup(){
  createCanvas(900,650);

w1=createSprite(10,500,15,200);
w2=createSprite(117.5,600,230,15);
w2.shapeColor="blue";
w3=createSprite(230,500,15,200);
w4=createSprite(340,600,220,15);
w4.shapeColor="yellow";
w5=createSprite(450,500,15,200);
w6=createSprite(560,600,220,15);
w6.shapeColor="green";
w7=createSprite(670,500,15,200);
w8=createSprite(782.5,600,230,15);
w8.shapeColor="red";
w9=createSprite(890,500,15,200);
o1=createSprite(117.5, 400, 230, 15);
o1.shapeColor="blue";
o2=createSprite(340, 400, 230, 15);
o2.shapeColor="yellow";
o3=createSprite(560, 400, 230, 15);
o3.shapeColor="green";
o4=createSprite(782.5, 400, 230, 15);
o4.shapeColor="red";
garbageGroup1= new Group();
garbageGroup2= new Group();
garbageGroup3= new Group();
garbageGroup4= new Group();
}

function draw(){
  background("white");

if(gameState==="serve"){
  textSize(23);
  text("Hello there,",50,100);
  textSize(17);
  text("Hope this game finds you well. This game will make you more responsible.",50,130);
  text("You might wonder how do we do that. We are going to see ways how to reduce landfills.",50,155);
  text("You might know that the pollution levels are increasing.",50,180);
  text("If we are able to reduce the amount of waste going to landfills we will be able to succeed on this issue.",50,205);
  text("Now, we will see the instructions. There are 2 levels",50, 230);
  text("1st level: You have to segregate the waste with the 4 basic segregation(Paper, plastic, glass and metal)",50,255);
  text("2nd level: You have to segregate plastic with '7 plastic no. segregation method'.", 50, 280);
  text("Let's start! Click on 'space' to start the game.",50,305);
  w1.visible=false;
w2.visible=false;
w3.visible=false;
w4.visible=false;
w5.visible=false;
w6.visible=false;
w7.visible=false;
w8.visible=false;
w9.visible=false;
o1.visible=false;
o2.visible=false;
o3.visible=false;
o4.visible=false;
}
if(keyDown("space")){
  gameState="play";
}

if(gameState==="play"){
  w1.visible=true;
  w2.visible=true;
  w3.visible=true;
  w4.visible=true;
  w5.visible=true;
  w6.visible=true;
  w7.visible=true;
  w8.visible=true;
  w9.visible=true;
  o1.visible=true;
  o2.visible=true;
  o3.visible=true;
  o4.visible=true;

//To create garbage
if (frameCount % 200 === 0) {
  garbage1 = createSprite(random(0, 100),random(50, 150) , 0, 100, 100);
  garbage1.velocityX = 3;
garbage1.addImage(g1Img)
garbage1.scale=0.5;

  garbageGroup1.add(garbage1);

  
}

//To create garbage
if (frameCount % 100 === 0) {
  garbage2 = createSprite(random(0, 100),random(200, 300) , 0, 100, 100);
  garbage2.velocityX = 3;
garbage2.addImage(g2Img);
garbage2.scale=0.2;

  garbageGroup2.add(garbage2);

  
}

//To create garbage
if (frameCount % 400 === 0) {
  garbage3 = createSprite(random(0, 100),random(100, 200) , 0, 100, 100);
  garbage3.velocityX = 3;
   garbage3.addImage(g3Img);
      garbage3.scale=0.2;

  garbageGroup3.add(garbage3);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage4 = createSprite(random(0, 100),random(150, 250) , 0, 100, 100);
  garbage4.velocityX = 3;
 garbage4.addImage(g4Img);
garbage4.scale=0.2;

  garbageGroup4.add(garbage4);

  
}
if(score>=0 && score<20){
textSize(20);
text("Paper", 90,630);
text("Plastic", 310,630);
text("Glass", 540,630);
text("Metal", 770,630);
}
      if(mousePressedOver(garbage1) && garbage1.x>25 && garbage1.x<215){
        o1.width=15;
        o1.height=230;
        o1.x=230;
        
        garbage1.velocityX=0;
garbage1.velocityY=3;
        text("Paper disposed properly.", width-580, 45);
      }
      else if(mousePressedOver(garbage1)){
        text("Wrong, Try again!", width-580,45);
      }
      if(mousePressedOver(garbage2) && garbage2.x>245 && garbage2.x<435){
        o2.width=15;
        o2.height=230;
        o2.x=450;
       
        garbage2.velocityX=0;
        garbage2.velocityY=3;
        text("Plastic disposed properly.", width-580, 65);
      }
      else if(mousePressedOver(garbage2)){
        text("Wrong, Try again!", width-580,65);
      }

      if(mousePressedOver(garbage3) && garbage3.x>465 && garbage3.x<655){
        o3.width=15;
        o3.height=230;
        o3.x=670;
        
        garbage3.velocityX=0;
    garbage3.velocityY=3;
        text("Glass disposed properly.", width-580, 85);
      }
      else if(mousePressedOver(garbage3)){
        text("Wrong, Try again!", width-580,85);
      }

      if(mousePressedOver(garbage4) && garbage4.x>685 && garbage4.x<875){
        o4.width=15;
        o4.height=230;
        o4.x=890;
      
        garbage4.velocityX=0;
        garbage4.velocityY=3;
        text("Metal disposed properly.", width-580, 105);
      }
      else if(mousePressedOver(garbage4)){
        text("Wrong, Try again!", width-580,105);
      }

if(garbageGroup1.isTouching(w2)){
  score+=1;
  o1.width=230;
  o1.height=15;
  o1.x=117.5;
  garbageGroup1.destroyEach();
}
if(garbageGroup2.isTouching(w4)){
  score+=1;
  o2.width=230;
  o2.height=15;
  o2.x=340;
  garbageGroup2.destroyEach();
}
if(garbageGroup3.isTouching(w6)){
  score+=1;
  o3.width=230;
  o3.height=15;
  o3.x=560;
  garbageGroup3.destroyEach();
}
if(garbageGroup4.isTouching(w8)){
  score+=1;
  o4.width=230;
  o4.height=15;
  o4.x=782.5;
  garbageGroup4.destroyEach();
}
if(score===20){
garbageGroup1.destroyEach();
garbageGroup2.destroyEach();
garbageGroup3.destroyEach();
garbageGroup4.destroyEach();
text("You have won the 1st level! Now, you know the basic segregation method.", 100, 100);
w1.visible=false;
w2.visible=false;
w3.visible=false;
w4.visible=false;
w5.visible=false;
w6.visible=false;
w7.visible=false;
w8.visible=false;
w9.visible=false;
o1.visible=false;
o2.visible=false;
o3.visible=false;
o4.visible=false;
}
}
text("Score: "+score , width-680 , 45);
  drawSprites();
}

