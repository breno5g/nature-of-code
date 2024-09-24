class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  walk() {
    const xStep = random(-1, 1) + 0.1;
    const yStep = random(-1, 1) + 0.1;

    this.x += xStep;
    this.y += yStep;
  }

  show() {
    stroke(255);
    point(this.x, this.y);
  }
}
