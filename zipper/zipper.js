export class Zipper {
  /**
   * @param {object} tree 
   * @param {object[]} parents 
   */
  constructor(tree, parents = []) {
    this.tree = tree;
    this.parents = parents;
  }

  /**
   * @param {object} tree
   * @returns {Zipper}
   */
  static fromTree(tree) { return new Zipper(structuredClone(tree)); }

  /**
   * @returns {object}
   */
  toTree() { return (this.parents.length) ? this.parents[0] : this.tree; }

  /**
   * @returns {any|null}
   */
  value() { return this.tree.value; }

  /**
   * @returns {Zipper|null}
   */
  left() { return (this.tree.left) ? new Zipper(this.tree.left, [...this.parents, this.tree]) : null; }

  /**
   * @returns {Zipper|null}
   */
  right() { return (this.tree.right) ? new Zipper(this.tree.right, [...this.parents, this.tree]) : null; }

  /**
   * @returns {Zipper|null}
   */
  up() { return (this.parents.length) ? new Zipper(this.parents.at(-1), this.parents.slice(0, -1)) : null; }

  /**
   * @param {any} value
   * @return {Zipper}
   */
  setValue(value) {
    this.tree.value = value;
    return new Zipper(this.toTree());
  }

  /**
   * @param {object} tree
   * @return {Zipper}
   */
  setLeft(tree) {
    this.tree.left = tree;
    return new Zipper(this.toTree());
  }

  /**
   * @param {object} tree
   * @return {Zipper}
   */
  setRight(tree) {
    this.tree.right = tree;
    return new Zipper(this.toTree());
  }
}
