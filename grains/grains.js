/**
 * @param {number} n
 * @returns {BigInt}
 */
export const square = (n) => {
  if (n < 1 || n > 64) { throw new Error('square must be between 1 and 64'); }
  return BigInt(2) ** BigInt(n - 1);
};

/**
 * @returns {BigInt}
 */
export const total = () => BigInt(2) ** BigInt(64) - BigInt(1);
