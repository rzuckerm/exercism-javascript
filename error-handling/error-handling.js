export const processString = (input) => {
  try {
    if (typeof input != 'string') { throw new TypeError('string type expected'); }
    if (input == '') { return null; }
    if (input.length < 10 || input.length > 100) { throw new RangeError('string length must be 10 to 100'); }
    if (/[A-Za-z]/.test(input) && /\d/.test(input)) { throw new SyntaxError('string must all letters or all numbers'); }
    return input.toUpperCase();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
