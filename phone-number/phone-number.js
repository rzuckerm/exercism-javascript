/**
 * @param {string} input
 * @returns {string}
 */
export const clean = (input) => {
  let output = input.replace(/[\s().+-]/g, '');
  output = (output.startsWith('1') && output.length == 11) ? output.slice(1) : output;
  throwIf(output.length < 10, 'Must not be fewer than 10 digits');
  throwIf(output.length == 11, '11 digits must start with 1');
  throwIf(output.length > 11, 'Must not be greater than 11 digits');
  throwIf(/[A-Za-z]/.test(output), 'Letters not permitted');
  throwIf(/\D/.test(output), 'Punctuations not permitted');
  throwIf(/^[01]/.test(output), `Area code cannot start with ${(output[0] == '0') ? 'zero' : 'one'}`);
  throwIf(/^\d{3}[01]/.test(output), `Exchange code cannot start with ${(output[3] == '0') ? 'zero' : 'one'}`);
  return output;
};

/**
 * @param {boolean} cond
 * @param {string} message
 */
const throwIf = (cond, message) => { if (cond) { throw new Error(message); } }
