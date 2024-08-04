export class Matrix {
  /**
   * @param {string} str 
   */
  constructor(str) {
    this._rows = str.split('\n').map((row) => row.split(' ').map((x) => Number(x)));
    this._cols = this._rows[0].map((_, col) => this._rows.map((row) => row[col]));
  }

  /**
   * @returns {number[]}
   */
  get rows() {
    return this._rows;
  }

  /**
   * @returns {number[]}
   */
  get columns() {
    return this._cols;
  }
}
