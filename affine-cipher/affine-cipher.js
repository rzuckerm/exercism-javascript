const INVS = [1, 9, 21, 15, 3, 19, 0, 7, 23, 11, 5, 17, 25];

/**
 * @param {string} text
 * @param {number} a
 * @param {number} b
 * @returns {string}
 * @throws {Error}
 */
export const encode = (text, { a, b }) => translate(text, a, (x) => a * x + b).replace(/(.{5})/g, '$1 ').trim();

/**
 * @param {string} text
 * @param {number} a
 * @param {number} b
 * @returns {string}
 * @throws {Error}
 */
export const decode = (text, { a, b }) => translate(text, a, (x) => INVS[a >> 1] * (x - b));

/**
 * @param {string} text 
 * @param {number} a
 * @param {function} func
 * @return {string}
 * @throws {Error}
 */
const translate = (text, a, func) => {
  if (a % 2 == 0 || a % 13 == 0) { throw new Error('a and m must be coprime.'); }
  return [...text.toLowerCase().replace(/[^a-z0-9]/g, '')].map((c) => /[0-9]/.test(c) ? c :
    String.fromCharCode((26 + func(c.charCodeAt(0) - 97) % 26) % 26 + 97)).join('');
}
