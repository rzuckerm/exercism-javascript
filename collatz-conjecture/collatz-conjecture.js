/**
 * @param {number} n
 * @returns {number}
 */
export const steps = (n) => {
  if (n < 1) {
    throw new Error('Only positive integers are allowed');
  }

  for (var k = 0; n != 1; k++, n = (n % 2 == 0) ? n / 2 : 3 * n + 1);
  return k;
};
