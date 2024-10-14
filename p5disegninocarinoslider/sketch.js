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
let slider;
let sunX ; 

function setup() {
  createCanvas(400, 400);
  
  // Inizializza posizione pallina
  pallinaX = -pallinaDiametro/2;
  pallinaY = height - pallinaDiametro/2 - 110; 
  
  // Inizializza slider per muovere sole
  slider = createSlider(-50, width + 50, 50); 
  slider.position(150, 430);
  slider.style('width', '100px');
}

  // RELOAD ANIMAZIONE CON BARRA SPAZIATRICE
  function keyPressed() {
    if (key === ' ') {
      location.reload();
    }
  }

function draw() {
  background("lightblue");

  // Aggiorna posizione sole in base a slider
  sunX = slider.value();

  // se sole esce dalla tela diventa notte
  if (sunX >= 425) { 
    fill("darkblue");
    rect(0, 0, width, height); 
    fill("white");
    circle(50, 50, 60); 
    fill("darkblue")
    noStroke ()
    circle(75, 40, 60); 
    fill("orange")
    circle(195, 130, 18)
  } else {
    fill("lightblue");
    rect(0, 0, width, height);
  }

  // SOLE
  stroke("black")
  fill("yellow");
  circle(sunX, 50, 50);
  
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
  if (sunX < 410) {
    fill("white");
    circle(195, 130, 17);
    fill("black");
    circle(195, 130, 8);
  }
  else {
    fill("orange")
    noStroke()  
    circle(195, 130, 18)
    noFill();
    stroke("black");
    arc(194, 135, 20, 10, 0, PI);  
  }

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
  if (sunX < 410) {
  push();
  translate(340, 170);
  rotate(sin(tailAngle) * 0.5);
  fill("orange");
  triangle(0, 0, 0, 50, 50, 0);
  pop();  
  tailAngle += tailSpeed;
  }
  else {
    push();
    translate(340, 170);
    rotate(sin(tailAngle/2) * 0);
    fill("orange");
    triangle(0, 0, 0, 50, 50, 0);
    pop();  
    }

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
  noStroke()
  fill("black")
  text("Premi la barra spaziatrice per rigiocare", 15, 355);
  text("Usa lo slider per passare da giorno a notte", 15, 370);
  text("Durante la notte c'è una stella!", 15, 385);

  // STELLA NEL CIELO CHE SEGUE IL PUNTATORE DI NOTTE
  if (sunX >= 425 && mouseY < 265) { 
    fill("white");
    noStroke();
    let starX = mouseX;
    let starY = mouseY;  
    circle(starX, starY, 10);
  }
}
