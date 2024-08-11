/**
 * @param {string[]} input
 * @returns {string[]}
 */
export const transpose = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      output[j] = (output[j] ?? '').padEnd(i, ' ') + (input[i][j] ?? '');
    }
  }

  return output;
};
