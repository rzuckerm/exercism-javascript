/**
 * @param {number[]} arr
 * @returns {number[]}
 */
export const encode = (arr) => arr.flatMap((n) => {
  let bytes = [n & 0x7f];
  while (n >>>= 7) { bytes.push((n & 0x7f) | 0x80); }
  return bytes.reverse();
});

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
export const decode = (arr) => {
  if (arr.length && arr.at(-1) & 0x80) { throw new Error('Incomplete sequence'); }
  return arr.reduce(([acc, n], b) => {
    n = ((n << 7) | (b & 0x7f)) >>> 0;
    return (b & 0x80) ? [acc, n] : [acc.concat(n), 0];
  }, [[], 0])[0];
};
