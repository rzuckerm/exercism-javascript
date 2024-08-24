/**
 * @param {any[]} a
 * @returns {any[]}
 */
export const flatten = (a) => a.flat(Infinity).filter((x) => x != null);