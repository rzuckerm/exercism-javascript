/**
 * @param {number} n
 * @returns {number[]}
 */
export const primeFactors = (n) => {
  let result = [];
  for (let factor = 2; factor * factor <= n; factor += (factor == 2) ? 1 : 2) {
    while (n % factor == 0) {
      result.push(factor);
      n = Math.floor(n / factor);
    }
  }

  return (n < 2) ? result : result.concat(n);
};
