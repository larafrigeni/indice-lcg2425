let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  slider=createSlider(0, 255, 0, 1);
  slider.position(0, canvasYMax-50);

}
function draw() {
  background("navy");
  frameRate(10);
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //fare in modo che i due cerchi siano definiti in base a una variabile e che si muova verso destra
  moonXpos += 1;
  // se la luna esce dallo schermo, farla rientrare dall'altra parte
  if (moonXpos > canvasXMax){
    moonXpos = 0;
  }
  // vogliamo aggiungere stelle che compaiano in modo casuale
  let xStella=0
  let yStella=0
  for(let numero_stelle=0; numero_stelle<5; numero_stelle++){
    stroke("yellow");
    strokeWeight(random(1, 10));
    point(xStella, yStella);
    xStella=random(0, canvasXMax);
    yStella=random(0, canvasYMax);
  }

  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }

//resetto la posizione delle case altrimenti non funziona il mouse over
  x_casa=0;
  let sliderValue=slider.value();
//quando passo con mouse sopra a una casa, questa diventa di colore diverso
if(mouseX>x_casa && mouseX<x_casa+house_width && mouseY>y-house_height && mouseY<y){
  fill(sliderValue);
  rect(x_casa, y-house_height , house_width, house_height);
}
else{
  fill("white");
  rect(x_casa, y-house_height , house_width, house_height);
}


  if(frameCount==100){
    noLoop();
  }
  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  // text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
}
