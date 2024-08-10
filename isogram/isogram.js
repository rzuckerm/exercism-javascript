/**
 * @param {string} phrase
 * @return {boolean}
 */
export const isIsogram = (phrase) => [...phrase.toLowerCase().replace(/[^a-z]/g, '')].sort().every((c, n, a) => c != a[n + 1]);
