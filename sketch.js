//BB1
var bb1 = function (b1){

  b1.x = 150;
  b1.y = 150;
  b1.d = 0;


  b1.setup = function(){
    b1.createCanvas(300, 300);
  }

  b1.draw = function(){
    b1.background(200);
    b1.fill(0);
    b1.noStroke();
    b1.rectMode(b1.CENTER);
    b1.rect(b1.x, b1.y,75,75);
    b1.d = b1.dist(b1.mouseX, b1.mouseY, b1.x, b1.y);
    if (b1.d < 75/2){
      b1.x = b1.random(50, b1.width-(75/2));
      b1.y = b1.random(50, b1.height-(75/2));
    }
  }
}
var myP5 = new p5(bb1, 'c1');



//BB2
var bb2 = function (b2){
  b2.f = 0;
  b2.count = 0;
  b2.side = 75;


  b2.setup = function(){
    b2.createCanvas(300,300);
  }

  b2.draw = function(){
    b2.background(200);
    b2.noStroke();
    b2.fill(b2.f);
    b2.rectMode(b2.CENTER);
    b2.rect(b2.width/2, b2.height/2, b2.side, b2.side);
  }

  b2.mouseClicked = function(){
    if (b2.mouseX > b2.width/2 - b2.side/2 && b2.mouseX < b2.width/2+b2.side/2 && b2.mouseY > b2.height/2 -b2.side/2 && b2.mouseY < b2.height/2+b2.side/2){
      if (b2.count % 2 == 0){
        b2.f = 255;
      } else {
        b2.f = 0;
      }
      b2.count++;
    }
  }
}
var myP5 = new p5(bb2, 'c2');



//BB3
var bb3 = function(b3){
  b3.x = 150;
  b3.y = 150;
  b3.side = 75;
  b3.d;

  b3.setup = function(){
    b3.createCanvas(300, 300);
  }

  b3.draw = function(){
    b3.background(200);
    b3.noStroke();
    b3.fill(0);
    b3.rectMode(b3.CENTER);
    b3.rect(b3.x,b3.y, b3.side,b3.side);
  }

  b3.mouseClicked = function(){
    b3.d = b3.dist(b3.mouseX, b3.mouseY,b3.x, b3.y);
    if(b3.d > b3.side/2){
      if (b3.mouseX > 0 && 
        b3.mouseX < b3.width && 
        b3.mouseY > 0 && 
        b3.mouseY < b3.height){
      b3.x = b3.mouseX;
      b3.y = b3.mouseY;
    }
    }
  }
}
var myP5 = new p5(bb3, 'c3');



//BB4
var bb4 = function(b4){
  b4.x = 150;
  b4.y = 150;
  b4.side = 75;
  b4.t = false;

  b4.setup = function(){
    b4.createCanvas(300,300);
  }

  b4.draw = function(){
    b4.background(200);
    b4.noStroke();
    b4.fill(0);
    b4.rectMode(b4.CENTER);
    b4.rect(b4.x, b4.y, b4.side, b4.side);
    if (b4.t == true){
      b4.y = b4.y*1.095;
      if (b4.y > 350){
        b4.t = false;
      }
    }
  }
  b4.mouseClicked = function(){
    if (b4.mouseX > b4.width/2 - b4.side/2 &&
      b4.mouseX < b4.width/2 + b4.side/2 &&
      b4.mouseY > b4.height/2 - b4.side/2 &&
      b4.mouseY < b4.height/2 + b4.side/2){
      b4.t = true;
    }
  }
}
var myP5 = new p5(bb4, 'c4');


//BB5
var bb5 = function (b5){

  b5.x = 150;
  b5.y = 150;
  b5.side = 75;

  b5.setup = function(){
    b5.createCanvas(300,300);
  }

  b5.draw = function(){
    b5.background(200);
    b5.noStroke();
    b5.fill(0);
    b5.rectMode(b5.CENTER);
    b5.rect(b5.x, b5.y, b5.side, b5.side);

    if(b5.mouseX > b5.width/2 - 37 &&
      b5.mouseX < b5.width/2 + 37 &&
      b5.mouseY > b5.height/2 - 37 &&
      b5.mouseY < b5.height/2 + 37){
      b5.side = 2 * (b5.dist(b5.mouseX, b5.mouseY, b5.width/2, b5.height/2));
    }
  }
}

var myP5 = new p5(bb5, 'c5');

//BB6
var bb6 = function(b6){
  b6.x=0;
  b6.y= 0;

  b6.setup = function(){
    b6.createCanvas(300,300,b6.WEBGL);
  }

  b6.draw = function(){
    b6.background(200);
    b6.ambientLight(200,200,200);
    b6.pointLight(255, 255, 255, -50, -50, 0);

    if (b6.mouseX > 0 &&
      b6.mouseX < b6.width &&
      b6.mouseY > 0 &&
      b6.mouseY < b6.height){
      b6.x = b6.mouseX*0.01;
    b6.y = b6.mouseY*0.01;
  }
    b6.translate(0,0,-40);
    b6.normalMaterial();
    b6.push();
    b6.rotateZ(0);
    b6.rotateX(b6.x);
    b6.rotateY(b6.y);
    b6.fill(50);
    b6.box(75,75,75);
    b6.pop();
  
  }
}
var myP5 = new p5(bb6, 'c6');



//BB7
var bb7 = function(b7){
  b7.x = 5;
  b7.a = 115;
  b7.b = 185;

  b7.setup = function(){
    b7.createCanvas(300,300);

  }

  b7.draw = function(){
    b7.background(200);
    for(b7.i = b7.a; b7.i < b7.b +1; b7.i+= b7.x){
      for(b7.j = b7.a; b7.j < b7.b +1; b7.j+= b7.x){
        b7.rectMode(b7.CENTER);
        b7.noStroke();
        b7.fill(0);
        b7.rect(b7.i, b7.j, 5, 5);
      }
    }

  }
  b7.mouseClicked = function(){
    if (b7.mouseX > 0 &&
      b7.mouseX < b7.width &&
      b7.mouseY > 0 &&
      b7.mouseY < b7.height){
    b7.x++;
    b7.a-=10;
    b7.b+=10;
  }
  }
}
var myP5 = new p5(bb7, 'c7');
