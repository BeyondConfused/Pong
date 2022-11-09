
var cnv;
let players = [];
let ball = [];
let gameController;
let ballMax = 1;



function setup() {
  cnv = createCanvas(window.innerWidth / 1.5, window.innerHeight);
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
  for(let i = 0; i < ball.length; i++) {
    ball[i].display();
    ball[i].move();
    ball[i].bounce();
    }

  for(let i = 0; i < players.length; i++) {
      players[i].move();
      players[i].display();
    }

}


function keyPressed(){
 
}

class Player {
  constructor(name, height, width, x, y) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.playerPos = new p5.Vector(x, y)
    console.log("Player", name + " spawned")
  }
  move(){
    if(keyCode== 32){
      console.log("yo")
    }
  }
  display(){
    fill(255);
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height);
  }
}


class GC {
  constructor() {
  }
  gameStart(){
    for (let i = 1; i < 3; i++) {
     players.push(new Player(i, 20, 30,)) 
    }
    players[0].playerPos = 0 + players[0].width, height / 2;
    players[1].playerPos = 0 + players[1].width, height / 2;
   
    for (let i = 1; i < 1+ballMax; i++) {
      ball.push(new Ball(width / 2, height / 2, 15, random(-3,3),random( 3,-3))); 
      console.log("Ball #"+i,"has spawned")
     }

  }

}

class Ball{
  constructor(x, y, r, fartX, fartY){
    this.ballPos = new p5.Vector(x, y);
    this.ballFart = new p5.Vector(fartX, fartY);
    this.r = r;
  }

move(){
  this.ballPos.add(this.ballFart);
}

display(){
  fill(255);
  circle(this.ballPos.x, this.ballPos.y, 2 * this.r);

}

bounce(){
  //Collision med højre væg
  /*
  if (this.ballPos.x > width - this.r) {
    this.ballPos.x = width - this.r;
    this.ballFart.x *= -1;
  }*/
  
  //Collision med venstre væg
  /*
  if (this.ballPos.x < this.r) {
    this.ballPos.x = this.r;
    this.ballFart.x *= -1;
  }*/
  
  //Collision med top
  if (this.ballPos.y < this.r) {
    this.ballPos.y = this.r;
    this.ballFart.y *= -1;
}
  //Colliision med bund
  if (this.ballPos.y > height - this.r) {
    this.ballPos.y = height - this.r;
    this.ballFart.y *= -1;
}

}


}