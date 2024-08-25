/**
 * @param {string} text
 * @returns {string}
 */
export const encode = (text) => decode(text).replace(/(.{5})/g, '$1 ').trim();

/**
 * @param {string} text
 * @returns {string}
 */
export const decode = (text) => [...text.toLowerCase().replace(/[^a-z0-9]/g, '')]
  .map((c) => /[0-9]/.test(c) ? c : String.fromCharCode(219 - c.charCodeAt(0))).join('');
