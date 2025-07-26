export class Rational {
  /**
   * @param {number} n
   * @param {number} d
   */
  constructor(n, d) {
    let g = gcd(n, d);
    this.n = (n == 0) ? 0 : Math.floor(Math.sign(d) * n / g);
    this.d = Math.floor(Math.abs(d) / g);
  }

  /**
   * @param {Rational} other
   * @returns {Rational}
   */
  add(other) { return new Rational(this.n * other.d + this.d * other.n, this.d * other.d); }

  /**
   * @param {Rational} other
   * @returns {Rational}
   */
  sub(other) { return new Rational(this.n * other.d - this.d * other.n, this.d * other.d); }

  /**
   * @param {Rational} other
   * @returns {Rational}
   */
  mul(other) { return new Rational(this.n * other.n, this.d * other.d); }

  /**
   * @param {Rational} other
   * @returns {Rational}
   */
  div(other) { return new Rational(this.n * other.d, this.d * other.n); }

  abs() { return new Rational(Math.abs(this.n), this.d); }

  /**
   * @param {number} a
   * @returns {Rational} 
   */
  exprational(a) { return (a >= 0) ? new Rational(this.n ** a, this.d ** a) : new Rational(this.d ** (-a), this.n ** (-a)); }

  /**
   * @param {number} a
   * @returns {float} 
   */
  expreal(a) { return (a ** (1 / this.d)) ** this.n; }

  reduce() { return this; }
}

const gcd = (a, b) => {
  [a, b] = [Math.abs(a), Math.abs(b)];
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
