export class CustomSet {
  /**
   * @param {any[]} list 
   */
  constructor(list = []) {
    this.set = [];
    list.forEach((v) => this.add(v));
  }

  /**
   * @returns {boolean}
   */
  empty() { return this.set.length == 0; }

  /**
   * @param {any} v
   * @returns {boolean}
   */
  contains(v) { return this.set.includes(v); }

  /**
   * @param {any} v
   * @returns {CustomSet}
   */
  add(v) {
    if (!this.contains(v)) { this.set.push(v); }
    return this;
  }

  /**
   * @param {CustomSet} other
   * @returns {boolean}
   */
  subset(other) { return this.set.every((v) => other.contains(v)); }

  /**
   * @param {CustomSet} other
   * @returns {boolean}
   */
  disjoint(other) { return this.set.every((v) => !other.contains(v)); }

  /**
   * @param {CustomSet} other
   * @returns {boolean}
   */
  eql(other) { return this.set.length == other.set.length && this.set.every((v) => other.contains(v)); }

  /**
   * @param {CustomSet} other 
   * @returns {CustomSet}
   */
  union(other) { return new CustomSet(this.set.concat(other.set)); }

  /**
   * @param {CustomSet} other 
   * @returns {CustomSet}
   */
  intersection(other) { return new CustomSet(this.set.filter((v) => other.contains(v))); }

  /**
   * @param {CustomSet} other 
   * @returns {CustomSet}
   */
  difference(other) { return new CustomSet(this.set.filter((v) => !other.contains(v))); }
}
