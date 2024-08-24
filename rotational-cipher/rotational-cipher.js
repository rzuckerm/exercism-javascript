/**
 * @param {string} msg 
 * @param {number} n 
 * @returns {string}
 */
export const rotate = (msg, n) => [...msg].map((c) => {
  let k = c.charCodeAt(0);
  return /[a-z]/i.test(c) ? String.fromCharCode((((k & 0x1f) - 1) + n) % 26 + (k & 0xe0) + 1) : c;
}).join('');
