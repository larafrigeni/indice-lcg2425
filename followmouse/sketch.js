let canvasXmax=200
let canvasYmax=200

function setup() {
  createCanvas(canvasXmax, canvasYmax);
  background(220);
}

function draw() {
  textSize(15);
  let string_toprint="Mouse x="+mouseX+", y="+mouseY
  // text(string_toprint, 20, 20);
  strokeWeight(2)
  line(0, mouseX, canvasXmax, mouseY);
  // eedback tasto mouse sx
  // disegnare linea gialla se chiacciamo il mouse altrimenti nero
  if (mouseIsPressed == true){
    if (mouseButton == RIGHT){
      background(220);
    }
    stroke("yellow");
  } else {
    stroke("black");
  }
}