/* VARIABLES */

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400);
  print(width);
  print(height);
  //sets the background color
  background(255, 249, 226);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Face
  fill(253, 242, 230);
  ellipse(width/2, height/2, 175, 200);


  //Eyes
    fill( 255, 255, 255 );
  ellipse(170, 170, 50 ,40 );
  ellipse(230, 170, 50, 40);
// Eyes
   fill(255, 51, 0);
  if (mouseIsPressed) {
    fill (0);
    ellipse (170, 170, 50, 40/8);
      ellipse (230, 170, 50, 40/8);
  
  }

  //Pupils
  fill(0, 51, 102);
  ellipse(170, 170, 22, 25);
  ellipse(230, 170, 22, 25);
  
  //Mouth
    fill(255, 153, 204);
arc(200, 230, 50, 50, 0, 180);
  //Text
  fill(0, 0, 0);
  textSize(15);
  text('Click me to see laserbeams coming out my eyes!', 20, 20);

  fill(0);
  rect(120,240,30,180);
  rect(280,240,30,180);
  rect(280,120,70,90);
  rect(120,120,70,90);
  arc(245,110,100,85,30,210);
  arc(155,110,100,85,330,150);

// variables
  let eyeWidth = 50;
  let eyeHeight = 40; 
  let pupilWidth = 22;
  let pupilHeight = 25; 
  
}

