var button1, button2, button3; 
var button4, button5, button6; 
var bg;
var form;

function preload() {
 
 bg = loadImage("mathImg.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();

  seventh = new Seventh();
  
  
}

function draw() {
  background(bg); 


 
  
 
 
 form.display();
 sixth.display();
 seventh.display();
 eight.display();
  drawSprites();
}

