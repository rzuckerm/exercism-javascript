/**
 * @param {string} lhs
 * @param {string} rhs
 */
export const compute = (lhs, rhs) => {
  if (lhs.length != rhs.length) {
    throw new Error('strands must be of equal length');
  }

  return lhs.split('').reduce((acc, c, n) => acc + (c != rhs[n]), 0);
};
