/**
 * @param {number} n
 * @returns {boolean}
 */
export const isArmstrongNumber = (n) => n == [...String(n)].reduce((acc, c, _, arr) => acc + c ** arr.length, 0);
