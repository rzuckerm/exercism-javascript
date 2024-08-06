/**
 * @param {number} n
 * @returns {BigInt}
 */
export const square = (n) => {
  if (n < 1 || n > 64) { throw new Error('square must be between 1 and 64'); }
  return 2n ** BigInt(n - 1);
};

/**
 * @returns {BigInt}
 */
export const total = () => 2n ** 64n - 1n;
