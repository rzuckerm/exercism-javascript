/**
 * @param {string} phrase
 * @returns {string}
 */
export const parse = (phrase) => phrase.replace(/([A-Za-z])[A-Za-z']+/g, '$1').replace(/[^A-Za-z]/g, '').toUpperCase();
