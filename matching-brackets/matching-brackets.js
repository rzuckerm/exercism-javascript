
/**
 * @param {string} input
 * @returns {boolean}
 */
export const isPaired = (input) => {
  input = input.replace(/[^()\[\]{}]/g, '');
  do {
    var len = input.length;
    input = input.replace(/\(\)|\[\]|\{\}/g, '');
  } while (len != input.length);

  return input.length == 0;
};
