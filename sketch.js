// [0,1,2,3...]
let plants = [{
  name: "Large",
  color: "Green"
}, {
  name: "Medium",
  color: "purple"
}, {
  name: "Small",
  texture: "fuzzy"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(200,50,110);
  createButton("start").mousePressed();
}

function draw() {
}

function mousePressed(){
  background(random(200 ,255));
  randomIndex = int(random(plants.length))
  console.log(plants[randomIndex].name);
  text(plants[randomIndex].name, 50,50);
  plants.splice(randomIndex, 1);
  console.log(plants);

}
