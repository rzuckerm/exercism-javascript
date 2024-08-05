/**
 * @param {number} n
 * @return {string}
 */
export const classify = (n) => {
  if (n < 1) { throw new Error('Classification is only possible for natural numbers.'); }
  let q = Math.floor(Math.sqrt(n));
  let sum = [...Array(q + 1)].reduce((a, _, x) => a + ((x > 1 && n % x == 0) ? x + ((n != x * x) ? n / x : 0) : 0), n > 1);
  return ['deficient', 'abundant', 'perfect'][2 * (sum == n) + (sum > n)];
};
