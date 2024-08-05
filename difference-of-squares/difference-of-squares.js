//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  /**
   * @param {number} n
   */
  constructor(n) {
    this._n = n;
  }

  get sumOfSquares() {
    return this._n * (this._n + 1) * (this._n * 2 + 1) / 6;
  }

  get squareOfSum() {
    return (this._n * (this._n + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
