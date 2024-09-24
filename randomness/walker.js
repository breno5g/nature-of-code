class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  walk() {
    let choice = floor(random(4));

    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }

  show() {
    stroke(255);
    point(this.x, this.y);
  }
}
