/**
 * @param {string} input
 * @returns {string}
 */
export const encode = (input) => input.replace(/(.)\1+/g, (s, c) => `${s.length}${c}`);

/**
 * @param {string} input
 * @returns {string}
 */
export const decode = (input) => input.replace(/(\d+)(\D)/g, (_, n, c) => c.repeat(n));
