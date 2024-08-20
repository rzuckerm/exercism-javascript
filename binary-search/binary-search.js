/**
 * @param {number[]} arr 
 * @param {number} target 
 */
export const find = (arr, target) => {
  let [lo, hi] = [0, arr.length];
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] == target) { return mid; }
    [lo, hi] = (arr[mid] < target) ? [mid + 1, hi] : [lo, mid];
  }

  throw new Error('Value not in array');
};
