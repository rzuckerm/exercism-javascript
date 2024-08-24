/**
 * @param {number} n
 * @returns {number}
 */
export const prime = (n) => {
  if (n < 1) { throw new Error('there is no zeroth prime'); }
  let primes = [2];
  for (let p = 3; primes.length < n; p += 2) {
    if (primes.every((x) => p % x != 0)) { primes.push(p); }
  }
  return primes.pop();
};
