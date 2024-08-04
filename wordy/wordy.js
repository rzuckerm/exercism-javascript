const OP_TABLE = {
  'plus': (a, b) => a + b, 'minus': (a, b) => a - b,
  'multiplied by': (a, b) => a * b, 'divided by': (a, b) => Math.floor(a / b)
};

/**
 * @param {string} question 
 * @returns {number}
 */
export const answer = (question) => {
  let [lhs, m] = [0, question.match(/^What is(.*)\?$/)?.[1]];
  errIf(m === undefined, 'Unknown operation');
  errIf(!(m = m.match(/^ (-?\d+)(.*)/)?.slice(1, 3)), 'Syntax error');

  [lhs, m] = [Number(m[0]), m[1]];
  while (m) {
    errIf(/^ -?\d+|^ (plus|minus|multiplied by|divided by)(?! -?\d+)/.test(m), 'Syntax error');
    errIf(!(m = m.match(/^ (plus|minus|multiplied by|divided by) (-?\d+)(.*)/)?.slice(1, 4)), 'Unknown operation');
    [lhs, m] = [OP_TABLE[m[0]](lhs, Number(m[1])), m[2]];
  }

  return lhs;
};

/**
 * @param {function} cond
 * @param {string} message 
 */
const errIf = (cond, message) => { if (cond) { throw new Error(message); } };
