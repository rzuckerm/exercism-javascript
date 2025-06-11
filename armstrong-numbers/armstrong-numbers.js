/**
 * @param {number} n
 * @returns {boolean}
 */
export const isArmstrongNumber = (n) => n == [...String(n)].reduce((acc, c, _, arr) => acc + BigInt(c) ** BigInt(arr.length), 0n);
