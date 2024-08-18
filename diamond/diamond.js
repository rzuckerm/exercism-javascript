/**
 * @param {string} letter
 * @returns {string[]}
 */
export const rows = (letter) => {
  let n = letter.charCodeAt(0) - 65;
  let letters = [...Array(2 * n + 1).keys()].map((k) => String.fromCharCode(65 + Math.abs(k - n)));
  return letters.slice(n).concat(letters.slice(1, n + 1)).map((x) => letters.map((y) => (x == y) ? x : ' ').join(''));
};
