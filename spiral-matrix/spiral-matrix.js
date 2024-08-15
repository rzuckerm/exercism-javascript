export const spiralMatrix = (n) => {
  let n2 = n * n, matrix = [...Array(n)].map(() => Array(n).fill(0));
  for (let i = 1, k = 0; i <= n2; k++) {
    for (let j = k; j < n - k; matrix[k][j] = i++, j++);
    for (let j = k + 1; j < n - k; matrix[j][n - k - 1] = i++, j++);
    for (let j = n - k - 2; j >= k; matrix[n - k - 1][j] = i++, j--);
    for (let j = n - k - 2; j > k; matrix[j][k] = i++, j--);
  }

  return matrix;
};
