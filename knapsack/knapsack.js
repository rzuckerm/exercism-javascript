/**
 * @param {number} maximumWeight
 * @param {object[]} items
 */
export const knapsack = (maximumWeight, items) => {
  let m = Array(maximumWeight + 1).fill(0);
  for (let item of items) {
    for (let j = maximumWeight; j >= item.weight; j--) { m[j] = Math.max(m[j], m[j - item.weight] + item.value); }
  }
  return m[maximumWeight];
};
