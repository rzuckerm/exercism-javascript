export class Element {
  /**
   * @param {any} value 
   * @param {Element} next 
   */
  constructor(value, next = null) { [this.value, this.next] = [value, next]; }
}

export class List {
  /**
   * @param {any[]} values 
   */
  constructor(values = []) {
    [this.head, this.length] = [null, 0];
    values.forEach((v) => this.add(new Element(v)));
  }

  /**
   * @param {any} element 
   */
  add(element) { [this.head, element.next, this.length] = [element, this.head, this.length + 1]; }

  /**
   * @returns {any[]}
   */
  toArray() {
    let [element, arr] = [this.head, []];
    while (element) {
      arr.push(element.value);
      element = element.next;
    }

    return arr;
  }

  reverse() { return new List(this.toArray()); }
}
