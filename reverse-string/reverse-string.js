/**
 * @param {string} str 
 * @returns {string}
 */
export const reverseString = (str) => Array.from(
    new Intl.Segmenter().segment(String(str)), (x) => x.segment).reverse().join('');
