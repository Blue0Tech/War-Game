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

    playerTank = new Tank(300,300,1,60,3,1);
}
function draw() {
    background(0,0,0);
    playerTank.display();
    Engine.update(engine);
}