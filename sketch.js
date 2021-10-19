// [0,1,2,3...]
let topic = [{
  StarterA: "Spring"
}, {
  StarterB: "Summer"
}, {
  StarterC: "Fall"
}, {
  StarterD: "Winter"
}];

let randomIndex;
let animating = false;
// let counter = 0;

function setup() {
  createCanvas(600, 600);
  textSize(25);
  text("click to randomize",200,80);
}

function draw() {
  if(animating == true){
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),random(50,200));
  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter)
//   background(random(255),random(255), random(255));
//   setTimeout(changeBackground,1000);
// } else
// }
function randomizer(){
  animating = false;
  if (plants[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(plants.length))
    console.log(plants[randomIndex].name);
    text(plants[randomIndex].name + "'s ideal environment is", 50, 50);
    plants.splice(randomIndex, 1);
    console.log(plants);
  } else {
    background(random(255), random(255), random(255));
    text("nothing left!", 50, 50)
  }

}
function mousePressed() {
  animating = true
  setTimeout(randomizer, 2000);

}
