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
  }
