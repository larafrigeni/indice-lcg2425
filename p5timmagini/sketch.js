let myImage;
//dobbiamo usarla in tutti pezzi del codice
let newImage;

//asynchronous
function preload(){
//--> caricare dati, immagini etc.
  myImage = loadImage("../../assets/opn-bk-pixabay.jpg");
  //percorso fino all'immagine
  //posizione relativa al file html
  //../ --> la cartella superiore
  // ./ --> questa cartella
  //p5immagini --> assets
  //opn-bk-pixabay.jpg
  newImage = loadImage("../../assets/octopus-pixabay.jpg");
}
//once and forever
function setup() {
  createCanvas(400, 400);
}

//loop
function draw() {
  background(220);
  //myImage
  //ora vogliamo mostrare l'immagine
  image(myImage,0,0,width,height);
  image(newImage,mouseX, mouseY,100,300);
}
