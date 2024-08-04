/**
 * @param {object} orig
 * @returns {object}
 */
export const transform = (orig) => Object.fromEntries(
  Object.entries(orig).flatMap(([v, ltrs]) => ltrs.map((l) => [l.toLowerCase(), Number(v)])));
