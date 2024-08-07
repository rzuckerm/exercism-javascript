// sum = p = a + b + c
// c = p - a - b
// a^2 + b^2 = c^2
// a^2 + b^2 = [p - (a + b)]^2
// a^2 + b^2 = p^2 - 2*p*(a + b) + (a + b)^2
// a^2 + b^2 = p^2 - 2*p*(a + b) + a^2 + 2*a*b + b^2
// p^2 - 2*p*(a + b) + 2*a*b = 0
// p^2 - 2*p*a - 2*p*b + 2*a*b = 0
// p*(p - 2*a) = 2*b*(p - a)
// b = [p*(p - 2*a)] / [2*(p - a)]
//
// Find value of a that equals b:
//
// [p*(p - 2*a)] / [2*(p - a)] = a
// p*(p - 2*a) = 2*a*(p - a)
// p^2 - 2*p*a = 2*p*a - 2*a^2
// p^2 - 4*p*a + 2*a^2 = 0
//
// a = [4*p +/- sqrt(16*p^2 - 4*2*p^2)] / (2*2)
//   = [4*p +/- sqrt(8*p^2)] / 4
//   = p*[1 +/- 1/sqrt(2)]
//
// Since a < p:
//
// a = p*[1 - 1/sqrt(2)]
//
// Therefore:
//
// a <= p*[1 - 1/sqrt(2)]
//
// The smallest Pythagorean Triplet is [3, 4, 5], so a >= 3
export function triplets({ minFactor, maxFactor, sum }) {
  let result = []
  let m = Math.floor((1 - 1 / 2 ** 0.5) * sum);
  for (let a = Math.max(3, minFactor ?? 3); a <= m; a++) {
    let num = sum * (sum - 2 * a);
    let den = 2 * (sum - a);
    if (num % den == 0) {
      let b = Math.floor(num / den);
      let c = sum - a - b;
      if (!maxFactor || c <= maxFactor) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}

class Triplet {
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   */
  constructor(a, b, c) {
    this._a = a;
    this._b = b;
    this._c = c;
  }

  toArray() {
    return [this._a, this._b, this._c];
  }
}
