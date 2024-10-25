let button;
let elem;
let dice = 1;
let numbers = [ 1, 2, 5, 79];
let angle = 0; 
let isRolling = false; 
let rollDuration = 1000; 
let rollStartTime; 

function setup() {
  createCanvas(400, 400);
  button = createButton("Lancia il dado!");
  button.position(100, 320);
  button.size(200, 50);
  button.style('background-color', 'lighgray'); 
  button.style('color', 'black'); 
  button.style('font-size', '20px'); 
  button.style('border-radius', '10px'); 
  button.mousePressed(rollDice);
}

function draw() {
  background("green");
  stroke("white");
  strokeWeight(2);
  
  if (isRolling) {
    angle += 0.1; // Incrementa angolo solo se dado sta ruotando
    dice = 0; // 0 puntini mentre ruota
    if (millis() - rollStartTime > rollDuration) {
      isRolling = false; // Ferma rotazione dopo rollDuration
      dice = ceil(random(1, 6)); 
    }
  }
  
  drawDice(dice, angle); 
}

function rollDice() {
  dice = random(1, 6);
  dice = ceil(dice);
  isRolling = true; 
  rollStartTime = millis(); 
}

function drawDice(value, angle) {
  push(); 
  translate(200, 150);
  rotate(angle); 
  fill("white");
  rect(-50, -50, 100, 100, 10); 
  fill("black");
  
  // puntini dado
  if (value === 1) {
    ellipse(0, 0, 20, 20);
  } else if (value === 2) {
    ellipse(-20, -20, 20, 20);
    ellipse(20, 20, 20, 20);
  } else if (value === 3) {
    ellipse(-20, -20, 20, 20);
    ellipse(0, 0, 20, 20);
    ellipse(20, 20, 20, 20);
  } else if (value === 4) {
    ellipse(-20, -20, 20, 20);
    ellipse(-20, 20, 20, 20);
    ellipse(20, -20, 20, 20);
    ellipse(20, 20, 20, 20);
  } else if (value === 5) {
    ellipse(-20, -20, 20, 20);
    ellipse(-20, 20, 20, 20);
    ellipse(0, 0, 20, 20);
    ellipse(20, -20, 20, 20);
    ellipse(20, 20, 20, 20);
  } else if (value === 6) {
    ellipse(-20, -20, 20, 20);
    ellipse(-20, 0, 20, 20);
    ellipse(-20, 20, 20, 20);
    ellipse(20, -20, 20, 20);
    ellipse(20, 0, 20, 20);
    ellipse(20, 20, 20, 20);
  }
  pop(); 
}
