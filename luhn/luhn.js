/**
 * @param {string} s
 * @return {boolean}
 */
export const valid = (s) => {
  let cleaned = s.replaceAll(' ', '');
  return /^[0-9]{2,}$/.test(cleaned) && [...cleaned].reverse().map(Number).reduce((acc, d, n) =>
    acc + ((n % 2) ? Math.floor(d / 5) + 2 * (d % 5) : d), 0) % 10 == 0;
}
