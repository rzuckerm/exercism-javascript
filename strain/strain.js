/**
 * @param {any[]} arr
 * @param {Function} fn
 * @returns {any[]}
 */
export const keep = (arr, fn) => arr.reduce((acc, x) => fn(x) ? [...acc, x] : acc, []);

/**
 * @param {any[]} arr
 * @param {Function} fn
 * @returns {any[]}
 */
export const discard = (arr, fn) => keep(arr, (x) => !fn(x));
