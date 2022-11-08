var cnv;

function setup() {
  cnv = createCanvas(750, window.innerHeight);
  centerCanvas();
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y)
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(0);
}