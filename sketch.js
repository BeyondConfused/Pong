let p1Score = 0
let p2Score = 0
var cnv;
let players = [];
let ball = [];
let gameController;
let ballMax = 1;
let ballPos;



function setup() {
  cnv = createCanvas(window.innerWidth / 1.5, window.innerHeight);
  //centerCanvas();
  background(0);
  

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  gameController = new GC();
  gameController.gameStart();
  noCursor();
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
    gameController.collisionSpiller();

  for(let i = 0; i < players.length; i++) {
      players[i].move();
      players[i].display();
    }
    gameController.scoreSystem();
   
    
}


function keyPressed(){
 
}

class Player {
  constructor(name, width, height, x, y, o, n) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.playerPos = new p5.Vector(x, y);
    this.o = o;
    this.n = n;
    console.log("Player ", name + " spawned")
  }
  move(){
    if(this.playerPos.y >= 0 + this.height / 2){
      if(keyIsDown(this.o)){
        this.playerPos.add(0, -5);
        console.log(this.playerPos)

      }
    }
    
    if(this.playerPos.y <= window.innerHeight - this.height / 2){
      if(keyIsDown(this.n)){
        this.playerPos.add(0, 5);
        console.log(this.playerPos)
      }
    }
  }
  display(){
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.playerPos.x, this.playerPos.y, this.width, this.height);
  }
}


class GC {
  constructor() {
  }
  gameStart(){
    for (let i = 1; i < 3; i++) {
     players.push(new Player(i, 20, height / 6));
    }
    
    players[0].playerPos.add(0 + players[0].width * 2, height / 2);
    players[1].playerPos.add(width - players[1].width * 2, height / 2);
    
    //Højre spiller
    players[1].o = 38;
    players[1].n = 40;

    //Venstre spiller
    players[0].o = 87;
    players[0].n = 83;
   
    for (let i = 1; i < 1+ballMax; i++) {
      ball.push(new Ball(width / 2, height / 2, 13, random([-6, 6]), random(-3, 3))); 
      console.log("Ball #" + i, "has spawned")
    }
  }

  scoreSystem(){
    for(let i = 0; i < ball.length; i++) {
      if(ball[i].ballPos.x < 0 - ball[i].r * 2){
        ball.splice(i - 1, 1)
        p2Score = p2Score + 1
        console.log("Left removed")
  
        if(ball.length < ballMax){
          ball.push(new Ball(width / 2, height / 2, 13, random([-6, 6]), random(-3, 3))); 
        }
      } 
    
      if(ball[i].ballPos.x > width + ball[i].r * 2){
        ball.splice(i - 1, 1)
        p1Score = p1Score + 1
        console.log("Right gone")
        if(ball.length < ballMax){
          ball.push(new Ball(width / 2, height / 2, 13, random([-6, 6]), random(-3, 3))); 
        }
      } 

      ball.push(new Ball(width / 2, height / 2, 13, random([-7, 7]),random(-3, 3))); 
      console.log("Ball #"+i,"has spawned")
     }
     
  }

  
  collisionSpiller(){
    if(ball[0].ballPos.y <= players[0].playerPos.y + (players[0].height / 2) && ball[0].ballPos.y >= players[0].playerPos.y - (players[0].height / 2)) {
    
      if(ball[0].ballPos.x <= players[0].playerPos.x + players[0].width) {
        ball[0].ballFart.x *= -1;
      }
    }
  
    if(ball[0].ballPos.y <= players[1].playerPos.y + (players[1].height / 2) && ball[0].ballPos.y >= players[1].playerPos.y - (players[1].height / 2)) { 
      
      if(ball[0].ballPos.x >= players[1].playerPos.x - players[1].width) {
        ball[0].ballFart.x *= -1; 
      }
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