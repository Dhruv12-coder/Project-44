var boyImg,GirlImg,castle,door1Img,door2Img,door3Img,monster,startAnimation,monsterImg,dungeonImg;
var start,boy,girl,monster;
var bar1,bar2,bar3;
var startlevel;
var door1,door2,door3;
var g1,g2,g3,g4,g5,g6,g7;
var gameState;

function preload(){
    castle = loadImage("castle.png");
    startAnimation = loadImage("start.png");
    boyImg = loadImage("boy.png");
    GirlImg = loadImage("girl.png");
    monsterImg = loadImage("monster.png");
    dungeonImg = loadImage("dungeon.jpg");
    door1Img = loadImage("door1.png");
    door2Img = loadImage("door 2.png");
    door3Img = loadImage("door3.png");



}


function setup(){
    createCanvas(800,800);
    background(castle);

    start = createSprite(430,400,50,50);
    start.addImage(startAnimation);
    start.scale  = 0.3;

    boy = createSprite(200,400,50,50);
    boy.addImage(boyImg);
    boy.scale = 0.7;
    boy.visible = false;
    boy.setCollider("rectangle",0,0,100,400);


    girl = createSprite(600,400,50,50);
    girl.addImage(GirlImg);
    girl.scale = 0.5;
    girl.visible = false;
    girl.setCollider("rectangle",0,0,100,500);

    monster = createSprite(600,700,50,50);
    monster.addImage(monsterImg);
    monster.scale = 0.5;
    monster.visible = false;
    monster.setCollider("rectangle",0,0,300,300);

    startlevel = createSprite(430,400,50,50);
    startlevel.addImage(startAnimation);
    startlevel.scale  = 0.3;
    startlevel.visible = false;

    g1 = 0;
    g2 = 1;
    g3 = 2;
    g4 = 3;
    g5 = 4;
    g6 = 5;
    g7 = 6;

    gameState = g1;


    

    





}


function draw(){
    background(255);
    
    if(gameState === g1){
    background(castle);
    if(mousePressedOver(start)){
        start.visible = false;
        boy.visible  = true;
        girl.visible = true;
        monster.visible = false;

        

        gameState = g2

    
    }
    
    
}
if (gameState === g2){
    background(castle);

    if(mousePressedOver(boy)){
        boy.visible = true;
        boy.y = 650;
        //girl.visible = false;
        girl.destroy();
        monster.visible = true;  

    }

    if(mousePressedOver(girl)){
        //boy.visible = false;
        boy.destroy();
        girl.visible = true;
        girl.y = 600;
        girl.x = 200;
        monster.visible = true;  

    }

    
        monster.velocityX = -3;
        if(monster.isTouching(boy)){
            boy.x = 400;
            boy.y = 320;
            boy.scale = 0.2;
            monster.visible = false;
            fill("black")
            bar1 = createSprite(400,320,5,80);
            bar1.shapeColor = "black";
            bar2 = createSprite(420,320,5,60);
            bar2.shapeColor = "black";
            bar3 = createSprite(380,320,5,60);
            bar3.shapeColor = "black";
            
            
        }

        if (boy.y === 320 ){
            startlevel.visible = true;
            fill("green")
            textSize(30);
            text("The Monster Has imprisoned you in his castle complete the levels to get out free",200,280);
            
        }

        if(monster.isTouching(girl)){
            girl.x = 400;
            girl.y = 320;
            girl.scale = 0.2;
            monster.visible = false;
            fill("black")
            bar1 = createSprite(400,320,5,80);
            bar1.shapeColor = "black";
            bar2 = createSprite(420,320,5,60);
            bar2.shapeColor = "black";
            bar3 = createSprite(380,320,5,60);
            bar3.shapeColor = "black";
            
            
            
        }

        if (girl.y === 320 ){
            startlevel.visible = true;
            fill("green")
            textSize(30);
            text("The Monster Has imprisoned you in his castle complete the levels to get out free",50,280);
            
        }
    fill("green")
    textSize(25);
    text("Choose Avatar",300,200);
        
    }
        if(mousePressedOver(startlevel)&& startlevel.visible === true){
            
            gameState = g3


        }
        if(gameState === g3){
            background(dungeonImg);
            boy.scale = 0.7;
            boy.x = 100;
            boy.y = 650;
            startlevel.visible = false;

            fill("white")
            textSize(30);
            text("Choose any one of the 4 doors to pass this level",50,90);

            door1 = createSprite(270,270,50,50);
            door1.addImage(door1Img);
            door1.scale = 0.5;

            door2 = createSprite(560,270,50,50);
            door2.addImage(door2Img);
            door2.scale = 0.5;

            door3 = createSprite(270,500,50,50);
            door3.addImage(door3Img);
            door3.scale = 0.5;

            door1 = createSprite(560,500,50,50);
            door1.addImage(door1Img);
            door1.scale = 0.5;
            


        }
        
    
        
    
    
    drawSprites();
    

    //if(mousePressedOver(start)){
        

    //}

    


}
