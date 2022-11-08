var cnv;
let players = []
let ball;
let gameController;

function setup() {
  cnv = createCanvas(750, window.innerHeight);
  centerCanvas();
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  gameController = new GC()
  gameController.gameStart()

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


function keyPressed(){
 
}

class Player {
  constructor(name, height, width,x ,y) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    console.log("Player",name+" spawned")
  }
  move(){
    if(keyCode==32){
      console.log("yo")
    }
  }
}


class GC {
  constructor() {
  }
  gameStart(){
    for (let i = 1; i < 3; i++) {
     players.push(new Player(i,20,30)) 
    }


  }
}