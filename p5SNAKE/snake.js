class Snake {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.tail = [];
      this.len = [];
      this.xspeed = 1;
      this.yspeed = 0;
      this.tail = [];
    }
  
  //funzione per modificare velocità
    dir(x, y) {
      // vietare direzione opposta (se somma velocita x (y) = 0)
      if (this.xspeed + x === 0 || this.yspeed + y === 0) {
        console.log("Invalid direction");
      } else {
        this.xspeed = x;
        this.yspeed = y;
      }
    }
  
  //morte
  death() {
    score = this.len;
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.len = 0;
        this.tail = [];
        return true;
      }
    }
    return false;
  }
  
  
  //per mangiare: posizione testa = posizione cibo
    eat(food_x, food_y) {
      if (this.x === food_x && this.y === food_y) {
        this.len++;
        return true;
      }
      return false;
    }

  
  //creare funzione che aggiorni posizione serpente: ogni elemento coda prende posto successivo elemento coda tranne testa
    update() {
      if(this.len === this.tail.length) {
        for (var i = 0; i < this.tail.length - 1; i++) {
          this.tail[i] = this.tail[i + 1];
        }
      }
      this.tail[this.len - 1] = createVector(this.x, this.y);
  
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
  
      if (this.x > width - scl) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = width - scl;
      }
  
      if (this.y > height - scl) {
        this.y = 0;
      } else if (this.y < 0) {
        this.y = height - scl;
      }
    }
  
  
    show() {
      fill(255);
      for( var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      rect(this.x, this.y, scl, scl);
    }
    
}  