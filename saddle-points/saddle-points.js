/**
 * @param {number[][]} matrix
 * @returns {object}
 */
export const saddlePoints = (matrix) => {
  let mins = matrix[0].map((_, c) => matrix.map((row) => row[c])).map((col) => Math.min(...col));
  return matrix.map((row) => Math.max(...row)).flatMap((mx, i) =>
    mins.map((mn, j) => (mn == mx) ? { "row": i + 1, "column": j + 1 } : {})).filter((x) => "row" in x);
};
