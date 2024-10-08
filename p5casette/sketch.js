function setup() {
  createCanvas(400, 400);
}

function draw() {
  //cielo scuro
  background("darkblue");
  
  // Disegna la luna
  fill(220, 220, 200);
  noStroke();
  circle(300, 100, 80, 80);
  
  // Disegna i crateri
  fill(200, 200, 180);
  circle(280, 90, 20, 20);
  circle(310, 110, 15, 15);
  circle(290, 120, 10, 10);

  // Disegna il prato
  fill(30, 100, 30);
  rect(0, 300, 400, 100);

  // Disegna casetta1 
  fill("white");
  rect(0, 250, 50, 50);

    // Disegna il tetto
    fill("red");
    triangle(0, 250, 25, 200, 50, 250);

      // Disegna finestra casetta1
      fill("blue");
      rect(10, 260, 10, 10);

  // Disegna casetta2  
  fill("white");
  rect(100, 250, 50, 50);

    // Disegna il tetto
    fill("red");
    triangle(100, 250, 125, 200, 150, 250);

      // Disegna finestra casetta2
      fill("blue");
      rect(110, 260, 10, 10);

  // Disegna casetta3 
  fill("white");
  rect(200, 250, 50, 50);

    // Disegna il tetto
    fill("red");
    triangle(200, 250, 225, 200, 250, 250);

      // Disegna finestra casetta3
      fill("blue");
      rect(210, 260, 10, 10);

  // Disegna casetta4 
  fill("white");
  rect(300, 250, 50, 50);

    // Disegna il tetto 
    fill("red");
    triangle(300, 250, 325, 200, 350, 250);

      // Disegna finestra casetta4
      fill("blue");
      rect(310, 260, 10, 10);
  }
  
  
