export class Triangle {
  /**
   * @param  {number} sides
   */
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
    this.valid = sides.every((n) => n > 0) && this.sides[0] + this.sides[1] > this.sides[2];
  }

  get isEquilateral() {
    return this.valid && this.sides[0] == this.sides[2];
  }

  get isIsosceles() {
    return this.valid && (this.sides[0] == this.sides[1] || this.sides[1] == this.sides[2]);
  }

  get isScalene() {
    return this.valid && this.sides[0] != this.sides[1] && this.sides[1] != this.sides[2];
  }
}
