const R = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const V = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

/**
 * @param {number} n
 * @returns {string}
 */
export const toRoman = (n) => R.reduce(([s, m], r, i) => [s + r.repeat(m / V[i]), m % V[i]], ['', n])[0];
