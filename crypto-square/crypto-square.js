/**
 * @param {string} text 
 */
export function Crypto(text) {
  text = text.toLowerCase().replace(/[^a-z\d]/g, '');
  let q = Math.sqrt(text.length), r = Math.round(q), c = Math.ceil(q);
  this.ciphertext = [...Array(c)].map((_, n) => [...Array(r)].reduce((s, _, m) => s + (text[m * c + n] ?? ' '), '')).join(' ');
}
