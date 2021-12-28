var bola;


function setup() {
  createCanvas(400,400);
  bola = createSprite(200,200,50,50);
}


function draw() 
{
  background("black");


if(keyIsDown(LEFT_ARROW)){
bola.position.x = bola.position.x -5;
background("red");
}
if(keyIsDown(RIGHT_ARROW)){
bola.position.x = bola.position.x +5;
  background("yellow");
  }
  

 if(keyIsDown(UP_ARROW)){
bola.position.y = bola.position.y -5;
    background("darkblue");
    }
    
if(keyIsDown(DOWN_ARROW)){
bola.position.y = bola.position.y +5;
      background("green");
      }



drawSprites();
}




