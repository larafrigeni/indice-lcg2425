let tailAngle = 0;
let tailSpeed = 0.1;
let earAngle = 0;
let earSpeed = 0.05;
let pallinaX, pallinaY;
let pallinaVelocitaX = 2;
let pallinaDiametro = 45; 
let calcioAngolo = 0;
let calcioVelocita = 0.2;
let calciando = false;

function setup() {
  createCanvas(400, 400);
  
  // Inizializza posizione pallina
  pallinaX = -pallinaDiametro/2;
  pallinaY = height - pallinaDiametro/2 - 110; 
}

  // RELOAD ANIMAZIONE CON BARRA SPAZIATRICE
  function keyPressed() {
    if (key === ' ') {
      location.reload();
    }
  }

function draw() {
  background("lightblue");

  // SOLE
  fill("yellow");
  circle(350, 50, 50);
  
  // PRATO
  fill("limegreen");
  rect(0, 270, 400, 130);
   
  // CORPO
  fill ("orange")
  rect (170, 170, 170, 70)

  // ZAMPE
  rect (190, 240, 20, 50)
  rect (320, 240, 20, 50)
  rect (300, 240, 20, 50) 
  // Zampa che tira il calcio
  push();
  translate(170, 240);
  rotate(calciando ? sin(calcioAngolo) * 0.5 : 0);
  rect(0, 0, 20, 50);
  pop();

  // MUSO
  rect (125, 125, 45, 45)

  // TESTA
  rect (170, 105, 65, 65)

  // NASINO
  fill("black");
  rect (125, 125, 10, 10)
  
  // SORRISO
  noFill();
  stroke("black");
  arc(125, 155, 40, 15, 0, PI/2);
  circle(130, 155, 1)
  circle(137, 150, 1)
  circle(130, 145, 1)

  // CRESTINA
  line(195, 97, 200, 105)
  line(200, 97, 205, 105)
  line(205, 97, 210, 105)
  
  // OCCHI
  fill("white");
  circle(195, 130, 17)
  fill("black");
  circle(195, 130, 8)

  // COLLARE
  fill("red");
  rect (170, 170, 65, 15)
  fill("green");
  rect (190, 170, 15, 15)
  fill("yellow");
  circle(160, 190, 17)

  // ORECCHIE
  fill("black");
  push();
  translate(235, 105);
  rotate(sin(earAngle) * 0.1);
  triangle(0, 0, 0, 65, -35, 65);
  pop();
  earAngle += earSpeed;

  // CODA SCODINZOLANTE
  push();
  translate(340, 170);
  rotate(sin(tailAngle) * 0.5);
  fill("orange");
  triangle(0, 0, 0, 50, 50, 0);
  pop();  
  tailAngle += tailSpeed;

  // PALLINA
  fill("red");
  circle(pallinaX, pallinaY, pallinaDiametro);
  
  // Muovi pallina
  pallinaX += pallinaVelocitaX;
  
  // Tira calcio alla pallina
  if (pallinaX + pallinaDiametro/2 > 160) {
    pallinaX = 160 - pallinaDiametro/2;
    calciando = true;
  } 
  
  // Animazione calcio
  if (calciando) {
    calcioAngolo += calcioVelocita;
    if (calcioAngolo >= PI) {
      calciando = false;
      calcioAngolo = 0;
      // Fai rimbalzare pallina
      pallinaVelocitaX = -pallinaVelocitaX;
    }
  }
}