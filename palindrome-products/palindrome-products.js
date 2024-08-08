export class Palindromes {
  /**
   * @param {number} minFactor
   * @param {number} maxFactor 
   */
  static generate({ minFactor, maxFactor }) {
    return new Palindrome(minFactor, maxFactor)
  }
}

class Palindrome {
  /**
   * @param {number} minFactor
   * @param {number} maxFactor 
   */
  constructor(minFactor, maxFactor) {
    if (maxFactor < minFactor) {
      throw new Error('min must be <= max')
    }

    this.minFactor = minFactor;
    this.maxFactor = maxFactor;
  }

  /**
   * @returns {object}
   */
  get smallest() {
    return _find(this.minFactor, this.maxFactor + 1, 1, (a, b) => a <= b);
  }

  /**
   * @returns {object}
   */
  get largest() {
    return _find(this.maxFactor, this.minFactor - 1, -1, (a, b) => a >= b);
  }
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} inc
 * @param {function} compFunc
 * @return {object}
 */
const _find = (start, end, inc, compFunc) => {
  let result = { value: null, factors: [] };
  for (let i of range(start, end, inc)) {
    let anyChange = false;
    for (let j of range(i, end, inc)) {
      let n = i * j;
      if (result.value === null || compFunc(n, result.value)) {
        anyChange = true;
        let nstr = `${n}`;
        if (nstr == nstr.split('').reverse().join('')) {
          if (n != result.value) {
            result.factors = [];
          }

          result.value = n;
          result.factors.push([i, j]);
        }
      }

      if (!anyChange) {
        break;
      }
    }
  }

  return result;
}

/**
 * @param {number} start 
 * @param {number} end 
 * @param {number} inc 
 */
function* range(start, end, inc) {
  if (inc > 0) {
    for (let i = start; i < end; i += inc) {
      yield i;
    }
  } else {
    for (let i = start; i > end; i += inc) {
      yield i;
    }
  }
}
