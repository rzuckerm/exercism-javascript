/**
 * @param {number} n
 * @return {number[][]}
 */
export const rows = (n) => {
  let arr = [];
  [...Array(n).keys()].forEach((i) => arr.push([1, ...(arr[i - 1]?.map((v, n, prev) => v + (prev[n + 1] ?? 0)) ?? [])]));
  return arr;
};
