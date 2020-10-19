const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stone, slingShot, boy_Img, boy, tree, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload(){
    boy_Img = loadImage("boy.png");
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    boy = createSprite(200, 620);
    boy.scale = 0.125;
    mango1 = new Mango(900, 200);
    mango2 = new Mango(800, 300);
    mango3 = new Mango(1000, 250);
    mango4 = new Mango(850, 250);
    mango5 = new Mango(1100, 350);
    mango6 = new Mango(1000, 300);
    mango7 = new Mango(950, 350);
    mango8 = new Mango(900, 300);
    mango9 = new Mango(750, 350);
    mango10 = new Mango(850, 350);
    stone = new Stone(100,150, 50);
    // if(stone.isTouching(mango1)){
    isTouching(stone, mango1);
    isTouching(stone, mango2);
    isTouching(stone, mango3);
    isTouching(stone, mango4);
    isTouching(stone, mango5);
    isTouching(stone, mango6);
    isTouching(stone, mango7);
    isTouching(stone, mango8);
    isTouching(stone, mango9);
    isTouching(stone, mango10);
    // }
    // if(stone.isTouching(mango2)){
    //     Matter.Body.setStatic(mango1.body, false);
    // }
    // if(){
    //     Matter.Body.setStatic(mango2.body, false);
    // }
    // if(stone.isTouching(mango4)){
    //     Matter.Body.setStatic(mango3.body, false);
    // }
    // if(stone.isTouching(mango5)){
    //     Matter.Body.setStatic(mango5.body, false);
    // }
    // if(stone.isTouching(mango6)){
    //     Matter.Body.setStatic(mango6.body, false);
    // }
    // if(stone.isTouching(mango7)){
    //     Matter.Body.setStatic(mango7.body, false);
    // }
    // if(stone.isTouching(mango8)){
    //     Matter.Body.setStatic(mango8.body, false);
    // }
    // if(stone.isTouching(mango9)){
    //     Matter.Body.setStatic(mango9.body, false);
    // }
    // if(stone.isTouching(mango10)){
    //     Matter.Body.setStatic(mango10.body, false);
    // }

    ground = new Ground(600,height,1200,10);
    tree = new Tree(900,1000,1200,10);
    slingShot = new SlingShot(stone.body,{x : 140, y : 550});

}

function draw(){
    background(225);
    Engine.update(engine);

    textSize(24);
    text("Press Space to get a second Chance to Play!!", 100, 50);
    
    boy.addImage(boy_Img);

    ground.display();
    tree.display();
    drawSprites();
    stone.display();
    slingShot.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x : 140, y : 550});
        slingShot.attach(stone.body);
    }
}
// function detectCollision(lstone,lmango){ 
//     mangoBodyPosition = lmango.body.position;
//     stoneBodyPosition = lstone.body.position;

//     var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
//     if(distance <= lmango.r +lstone.r){
//         Matter.Body.setStatic(lmango.body, false);
//     }
// }
function isTouching(lmango, lstone){
  if(lstone.x - lmango.x < (lstone.width + lmango.width)/2 &&
     lmango.x - lstone.x < (lstone.width + lmango.width)/2 &&
     lstone.y - lmango.y < (lstone.height + lmango.height)/2 &&
      lmango.y - lstone.y < (lstone.height + lmango.height)/2){
    Matter.Body.setStatic(lmango.body, false);
  }
}