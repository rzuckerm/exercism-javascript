/**
 * @param {string} isbn
 * @returns {boolean}
 */
export const isValid = (isbn) => /^\d{9}[\dX]$/.test(isbn.replaceAll('-', '')) &&
  [...isbn.replaceAll('-', '')].reduce((a, c, n) => a + (10 - n) * '0123456789X'.indexOf(c), 0) % 11 == 0;
