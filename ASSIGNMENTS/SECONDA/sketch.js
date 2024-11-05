function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1.5); 
}

function windowResized() {
  // ridimensiona canvas quando finestra viene ridimensionata
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
}

function draw() {
  background("lightgray"); 
  noFill();
  stroke("darkred");
  drawMandala(); 
  drawMandalini(); 
}

function drawMandala() {
  let spacing = 70; // spazio tra le forme
  let margin = 80; // margine da bordo canvas
  let offsetX = (width - (margin * 2 + spacing * floor((width - margin * 2) / spacing))) / 2; // centra lungo x
  let offsetY = (height - (margin * 2 + spacing * floor((height - margin * 2) / spacing))) / 2; // centra lungo y

  // per lo spazio compreso tra i margini considerando l'offset, incrementando di spacing. x e y sono le coordinate del centro di ogni mandala
  for (let x = margin + offsetX; x < width - margin + offsetX; x += spacing) {
    for (let y = margin + offsetY; y < height - margin + offsetY; y += spacing) {
      // genera un numero casuale di forme e un raggio casuale
      let numShapes = floor(random(3, 30)); 
      let radius = random(2, 15); 

      // disegna le forme 
      for (let i = 0; i < numShapes; i++) {
        let angle = TWO_PI / numShapes * i; // calcola angolo tra cerchietti facendo 360°/numero forme
        let mandalaX = x + cos(angle) * radius; // calcola posizione x di ogni cerchietto: coseno x raggio (distanza dal centro) + x
        let mandalaY = y + sin(angle) * radius; // calcola posizione y di ogni cerchietto: seno x raggio (distanza dal centro) + y

        ellipse(mandalaX, mandalaY, 10, 10); 
      }
    }
  }
}

// funzione uguale a drawMandala ma dimensione cerchi random come raggio
function drawMandalini() {
  let spacing = 70; 
  let margin = 80; 
  let offsetX = (width - (margin * 2 + spacing * floor((width - margin * 2) / spacing))) / 2; 
  let offsetY = (height - (margin * 2 + spacing * floor((height - margin * 2) / spacing))) / 2; 

  for (let x = margin + offsetX; x < width - margin + offsetX; x += spacing) {
    for (let y = margin + offsetY; y < height - margin + offsetY; y += spacing) {
      let numShapes = floor(random(3, 30)); 
      let radius = random(2, 15); 

      for (let i = 0; i < numShapes; i++) {
        let angle = TWO_PI / numShapes * i; 
        let mandalaX = x + cos(angle) * radius; 
        let mandalaY = y + sin(angle) * radius; 

        ellipse(mandalaX, mandalaY, radius, radius); 
      }
    }
  }
}
