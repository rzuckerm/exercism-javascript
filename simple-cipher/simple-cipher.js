export class Cipher {
  /**
   * @param {string} key 
   */
  constructor(key = '') {
    this._k = key ? [...key].map((c) => c.charCodeAt(0) - 97) : [...Array(100)].map((_) => Math.floor(Math.random() * 26));
    this.key = this._k.map((c) => String.fromCharCode(c + 97)).join('')
  }

  /**
   * @param {string} s
   * @returns {string}
   */
  encode = (s) => [...s].map((c, n) => this._translate(c, this._k[n % this._k.length])).join('');

  /**
   * @param {string} str
   * @returns {string}
   */
  decode = (s) => [...s].map((c, n) => this._translate(c, -this._k[n % this._k.length])).join('');

  /**
   * @param {string} c Character to encode/decode
   * @param {number} k Key shift
   * @returns {string}
   */
  _translate = (c, k) => String.fromCharCode((c.charCodeAt(0) + k - 71) % 26 + 97);
}
