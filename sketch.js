const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var canvas;
var playerTank;
function preload() {
    //
}
function setup() {
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 0;
    playerTank = new Tank(300,300,1,60,3,1);
}
function draw() {
    background(0,0,0);
    playerTank.display();
    Engine.update(engine);
}
function keyPressed() {
    if(keyCode===87) {
        playerTank.move(0,-0.03);
    }
    if(keyCode===83) {
        playerTank.move(0,0.03);
    }
    if(keyCode===65) {
        playerTank.move(-0.03,0);
    }
    if(keyCode===68) {
        playerTank.move(0.03,0);
    }
    if(keyCode===88) {
        playerTank.bomb();
    }
}