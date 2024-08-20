export class BinarySearchTree {
  /**
   * @param {any} data 
   */
  constructor(data) { this.data = data; }

  /**
   * @param {any} data
   */
  insert(data) {
    let side = (data <= this.data) ? 'left' : 'right';
    (!this[side]) ? (this[side] = new BinarySearchTree(data)) : this[side].insert(data);
  }

  /**
   * @param {function}
   */
  each(fn) {
    this.left && this.left.each(fn);
    fn(this.data);
    this.right && this.right.each(fn);
  }
}
