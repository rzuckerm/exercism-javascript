/**
 * @param {number[]} a
 * @param {number} f
 * @param {number} t
 * @returns {number[]}
 * @throws {Error}
 */
export const convert = (a, f, t) => {
  if (f < 2) { throw new Error('Wrong input base'); }
  if (t < 2) { throw new Error('Wrong output base'); }
  if (!a.length || (a.length > 1 && !a[0]) || a.some((d) => d < 0 || d >= f)) { throw new Error('Input has wrong format'); }

  for (var b = [], q = a.reduce((acc, d) => acc * f + d, 0); q > 0; q = Math.floor(q / t)) { b.push(q % t); }
  return (b.length > 0) ? b.reverse() : [0];
};
