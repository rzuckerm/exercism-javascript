/**
 * @param {*} data 
 * @param {Node} next 
 * @param {Node} prev 
 */
function Node(data = null, next = null, prev = null) {
  this.data = data;
  this.next = next;
  this.prev = prev;
}

export class LinkedList {
  constructor() {
    this.tail = new Node();
    this.tail.prev = this.head = new Node(null, this.tail);
    this.length = 0;
  }

  /**
   * @param {*} data
   */
  push(data) {
    this._add(data, this.tail, this.tail.prev);
  }

  /**
   * @returns {*}
   */
  pop() {
    return this._remove(this.tail.prev);
  }

  /**
   * @returns {*} 
   */
  shift() {
    return this._remove(this.head.next);
  }

  /**
   * @param {*} data
   */
  unshift(data) {
    this._add(data, this.head.next, this.head);
  }

  /**
   * @param {*} data
   */
  delete(data) {
    for (let node = this.head.next; node != this.tail; node = node.next) {
      if (node.data == data) {
        this._remove(node);
        break;
      }
    }
  }

  count() {
    return this.length;
  }

  /**
   * @param {*} data 
   * @param {Node} next 
   * @param {Node} prev 
   */
  _add(data, next, prev) {
    next.prev = prev.next = new Node(data, next, prev);
    this.length++;
  }

  /**
   * @param {Node} node
   */
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node.data;
  }
}
