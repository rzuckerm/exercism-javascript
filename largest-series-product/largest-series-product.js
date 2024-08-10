/**
 * @param {string} digits
 * @param {number} span
 * @returns {number}
 */
export const largestProduct = (digits, span) => {
  throwIf(span < 1, 'Span must be greater than zero');
  throwIf(span > digits.length, 'Span must be smaller than string length');
  throwIf(/\D/.test(digits), 'Digits input must only contain digits');
  digits = [...digits].map(Number);
  return Math.max(...digits.slice(0, digits.length - span + 1)
    .map((_, n) => digits.slice(n, n + span).reduce((acc, v) => acc * v, 1)));
};

/**
 * @param {boolean} cond
 * @param {string} message
 */
const throwIf = (cond, message) => { if (cond) { throw new Error(message); } }
