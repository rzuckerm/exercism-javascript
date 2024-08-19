export class List {
  /**
   * @param {number[]} list 
   */
  constructor(list = []) { this.list = list; }

  /**
   * @param {number[]} other 
   * @returns {boolean}
   */
  compare(other) {
    let equals = (a, b) => a.length == b.length && a.every((v, n) => v === b[n]);
    let includes = (a, b) => a.length < b.length && b.slice(a.length - 1).some((_, k) => equals(a, b.slice(k, k + a.length)));
    return ['UNEQUAL', 'SUBLIST', 'SUPERLIST', 'EQUAL'][
      3 * equals(this.list, other.list) + includes(this.list, other.list) + 2 * includes(other.list, this.list)];
  }
}
