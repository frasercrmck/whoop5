function setup() {
  createCanvas(640, 480);
  background(255, 204, 0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
