let w;

function setup() {
  createCanvas(400, 400);
  w = new Walker();
}

function draw() {
  background(0);

  w.show();
  w.walk();
}
