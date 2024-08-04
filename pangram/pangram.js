/**
 * @param {string} sentence
 * @returns {bool}
 */
export const isPangram = (sentence) => new Set(sentence.toLowerCase().match(/[a-z]/g)).size == 26;
