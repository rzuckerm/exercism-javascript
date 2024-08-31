/**
 * @param {string} m
 * @param {number} r
 * @returns {string}
 */
export const encode = (m, r) => indices(m, r).map((k) => m[k]).join('');

/**
 * @param {string} m
 * @param {number} r
 * @returns {string}
 */
export const decode = (m, r) => indices(m, r).map((k, n) => [k, m[n]]).sort((a, b) => a[0] - b[0]).map((a) => a[1]).join('');

/**
 * 
 * @param {string} m
 * @param {number} r
 * @returns {number[]}
 */
const indices = (m, r) =>
  [...m].map((_, k) => [Math.abs((k + r - 1) % (2 * r - 2) - r + 1), k]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
