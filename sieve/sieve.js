/**
 * @param {number} n
 * @returns {number[]}
 */
export const primes = (n) => {
  let sieve = [...Array(n + 1)].map((_, k) => ((k == 2) || (k >= 3 && (k % 2))) ? k : 0);
  for (let i = 3; i * i <= n; i += 2) {
    if (sieve[i]) { [...Array(Math.ceil((n - (i * i)) / (2 * i)))].forEach((_, k) => sieve[i * (2 * k + i)] = 0); }
  }

  return sieve.filter((k) => k);
};
