// [0,1,2,3...]
let topic = [{
  starter: "Do you know what my shirt is made of? Boyfriend material."
}, {
  starter: "Is your name Google? Because you have everything I’ve been searching for."
}, {
  starter: "You must be a broom, because you just swept me off my feet."
}, {
  starter: "Kiss me if I’m wrong, but dinosaurs still exist, right?"
}, {
  starter: "If you were a tropical fruit, you’d be a fine-apple!"
}];

let randomIndex;
let animating = false;
let button;
let cnv;
let myFont;
// let counter = 0;

function setup() {
  cnv = createCanvas(600, 450);
  cnv.parent("#canvasDiv")
  createCanvas(900, 450);
  angleMode(DEGREES);
  rectMode(CENTER);
  textSize(13);
  text(0, 0, 0);

  button = createButton("Generate Pick-up Line");
  button = select('#genButton')
  button.position(190, 280);
  button.mousePressed(button);
  button.class("randomizerButton");
}

function draw() {
  push();
  textSize(30);
  textFont("Helvetica");
  textStyle(BOLD);
  textAlign(CENTER);
  text("Chatting with Chad",280,90);
  pop();
}

function avatar() {
  push();
  strokeWeight(8)
  stroke(53, 189, 204);
  fill(148, 219, 227);
  ellipse(700, 450, 240, 350)

  strokeWeight(8)
  stroke(247, 207, 172);
  fill(245, 218, 194);
  ellipse(700, 200, 200, 220)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(255, 255, 255);
  ellipse(650, 200, 60, 60)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(255, 255, 255);
  ellipse(750, 200, 60, 60)

  noStroke();
  fill(0, 0, 0);
  ellipse(750, 200, 25, 25)

  noStroke();
  fill(0, 0, 0);
  ellipse(650, 200, 25, 25)

  noStroke();
  fill(245, 218, 194);
  rectMode(CENTER);
  rect(650, 183, 70, 30)

  noStroke();
  fill(245, 218, 194);
  rectMode(CENTER);
  rect(750, 183, 70, 30)

  //Mouth
  noFill();
  stroke(222, 179, 142);
  arc(700, 250, 60, 60, 30, 150);

  //Nose
  noFill();
  stroke(222, 179, 142);
  arc(700, 210, 60, 60, 70, 110);

  //LBrow
  noFill();
  strokeWeight(10);
  stroke(128, 83, 44);
  arc(650, 210, 60, 60, 240, 300);

  //RBrow
  noFill();
  strokeWeight(10);
  stroke(128, 83, 44);
  arc(750, 190, 60, 60, 240, 300);

  //Hat
  fill(161, 158, 255);
  strokeWeight(10);
  stroke(92, 87, 255);
  arc(700, 150, 190, 180, 180, 360);

  line(795, 150, 550, 150);

  push();
  stroke(245, 255, 255);
  fill(255, 255, 255);
  rect(280, 200, 520, 80, 20);
  triangle(490, 240, 535, 235, 560, 260);
  pop();

  noStroke();
  fill(252, 40, 3);
  rectMode(CENTER);
  rect(750, 420, 60, 80)

  strokeWeight(3)
  stroke(245, 255, 255);
  fill(255, 255, 255);
  ellipse(750, 380, 60, 20)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(245, 218, 194);
  ellipse(780, 420, 60, 60)
}

function sadAvatar() {
  strokeWeight(8)
  stroke(53, 189, 204);
  fill(148, 219, 227);
  ellipse(700, 450, 240, 350)

  strokeWeight(8)
  stroke(247, 207, 172);
  fill(245, 218, 194);
  ellipse(700, 200, 200, 220)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(255, 255, 255);
  ellipse(650, 200, 60, 60)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(255, 255, 255);
  ellipse(750, 200, 60, 60)

  noStroke();
  fill(0, 0, 0);
  ellipse(765, 200, 25, 25)

  noStroke();
  fill(0, 0, 0);
  ellipse(665, 200, 25, 25)

  noStroke();
  fill(245, 218, 194);
  rectMode(CENTER);
  rect(650, 170, 70, 30)

  noStroke();
  fill(245, 218, 194);
  rectMode(CENTER);
  rect(750, 170, 70, 30)

  //Mouth
  noFill();
  stroke(222, 179, 142);
  arc(700, 300, 60, 60, 220, 320);

  //Nose
  noFill();
  stroke(222, 179, 142);
  arc(700, 210, 60, 60, 70, 110);

  //LBrow
  noFill();
  strokeWeight(10);
  stroke(128, 83, 44);
  arc(650, 195, 60, 60, 240, 300);

  //RBrow
  noFill();
  strokeWeight(10);
  stroke(128, 83, 44);
  arc(750, 195, 60, 60, 240, 300);

  //Hat
  fill(161, 158, 255);
  strokeWeight(10);
  stroke(92, 87, 255);
  arc(700, 150, 190, 180, 180, 360);

  line(795, 150, 550, 150);

  push();
  stroke(245, 255, 255);
  fill(255, 255, 255);
  rect(280, 200, 520, 80, 20);
  triangle(490, 240, 535, 235, 560, 260);
  pop();

  noStroke();
  fill(252, 40, 3);
  rectMode(CENTER);
  rect(750, 420, 60, 80)

  strokeWeight(3)
  stroke(245, 255, 255);
  fill(255, 255, 255);
  ellipse(750, 380, 60, 20)

  strokeWeight(3)
  stroke(247, 207, 172);
  fill(245, 218, 194);
  ellipse(780, 420, 60, 60)

}


function randomizer() {
  animating = false;
  if (topic[0]) {
    background(random(255), random(255), random(255));
    avatar();
    randomIndex = int(random(topic.length))
    console.log(topic[randomIndex].starter);
    noStroke();
    fill(0, 0, 0);
    text(`${topic[randomIndex].starter}`, 40, 200);
    topic.splice(randomIndex, 1);
    console.log(topic);
  } else {
    background(192, 194, 192);
    sadAvatar();
    noStroke();
    fill(0, 0, 0);
    text("Ugh FINE! Nevermind...", 200, 200)

  }
}

// function buttonPressed() {
function mousePressed() {
  animating = true;
  setTimeout(randomizer, 500);
}
