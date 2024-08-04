/**
 * @param {string} words
 * @return {object}
 */
export const countWords = (words) => words.toLowerCase().match(/\b[a-z0-9']+\b/g)
  .reduce((a, w) => ({ ...a, [w]: (a[w] ?? 0) + 1 }), {});
