export class List {
  /**
   * @param {Array} values 
   */
  constructor(values = []) {
    this.values = values;
  }

  /**
   * @param {List} list
   * @returns {List}
   */
  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  /**
   * @param {List[List]|List} lists
   * @returns {List}
   */
  concat(lists) {
    return lists.foldl((acc, list) => acc.append(list), new List(this.values));
  }

  /**
   * @param {function} predicate 
   * @returns {List}
   */
  filter(predicate) {
    return new List(this.foldl((acc, value) => predicate(value) ? [...acc, value] : acc, []));
  }

  /**
   * @param {function} func
   * @returns {List}
   */
  map(func) {
    return new List(this.foldl((acc, value) => [...acc, func(value)], []));
  }

  /**
   * @returns {number}
   */
  length() {
    return this.values.length;
  }

  /**
   * @param {function} func
   * @param {*} init
   * @return {*}
   */
  foldl(func, init) {
    let result = init;
    for (let value of this.values) {
      result = func(result, value);
    }

    return result;
  }

  /**
   * @param {function} func
   * @param {*} init
   * @return {*}
   */
  foldr(func, init) {
    return this.reverse().foldl(func, init);
  }

  /**
   * @returns {List}
   */
  reverse() {
    let newList = new List();
    for (let i = this.length() - 1; i >= 0; i--) {
      newList.values.push(this.values[i]);
    }

    return newList;
  }
}
