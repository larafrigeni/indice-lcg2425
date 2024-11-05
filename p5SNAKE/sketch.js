let s;
let scl = 20;
let input_utente = "Nulla"
let food_x;
let food_y;
let score;
let game_status = "Playing"

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  s = new Snake(0, 0)
  pickFoodLocation();

  button = createButton("Restart");
  button.hide();
}

  //generare posizione random cibo che spawna ma in modo proporzionato
  function pickFoodLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);

    food_x = floor(random(cols)) * scl;
    food_y = floor(random(rows)) * scl;
}


//distinguere stato di gioco e stato di morte
function draw() {
  if (game_status === 'Playing') {
    background(220);

    fill(255, 0, 100);
    rect(food_x, food_y, scl, scl);
  
    s.show();
    s.update();
  
    if (s.eat(food_x, food_y)) {
      pickFoodLocation();
    }
  
    score, am_i_dead = s.death();

    if(am_i_dead) {
      game_status = 'Game_over';
      button.show();
    }
  } else {
    background(0);
    fill(255);
    textSize(32);
    text("GAME OVER", 100, 200);
    text("Score: " + score, 100, 240);
    button.position(width / 2 - button.width / 2, height / 2 + 60);
    //lambda funcion: ()=>{funzione...} viene usata una sola volta dove definita: con bottone ricomincio
    button.mousePressed(() => {
      game_status = "Playing";
      s = new Snake(0, 0);
      pickFoodLocation();
      button.hide();
    })
  }
  
}


//callback: premendo tasti tastiera succede che...
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === SHIFT) {
    game_status = "Game_over";
    button.show();
  }
}

