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
    let compare = (lhs, rhs) => lhs.length == rhs.length && lhs.every((v, n) => v === rhs[n]);
    if (compare(this.list, other.list)) { return 'EQUAL'; }

    let [a, b, r] = (this.list.length < other.list.length) ? [this.list, other.list, 'SUB'] : [other.list, this.list, 'SUPER'];
    if (b.slice(a.length - 1).some((_, k) => compare(a, b.slice(k, k + a.length)))) { return `${r}LIST`; }

    return 'UNEQUAL';
  }
}
