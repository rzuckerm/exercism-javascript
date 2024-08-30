/**
 * @param {number} n
 * @returns {number}
 */
export const squareRoot = (n) => {
  if (n <= 1) { return n; }
  for (var x0 = Math.floor(n / 2), x1; (x1 = Math.floor((x0 + Math.floor(n / x0)) / 2)) < x0; x0 = x1);
  return x0;
};
