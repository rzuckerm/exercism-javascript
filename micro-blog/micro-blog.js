/**
 * @param {string} input
 * @returns {string}
 */
export const truncate = (input) => [...new Intl.Segmenter().segment(input)].slice(0, 5).map((x) => x.segment).join('');
