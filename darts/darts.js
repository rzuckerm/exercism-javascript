/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export const score = (x, y) => [10, 5, 1][[1, 25, 100].findIndex((d2) => x * x + y * y <= d2)] ?? 0;
