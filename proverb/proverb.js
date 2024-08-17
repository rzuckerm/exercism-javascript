/**
 * @param {string[]|object} args
 * @returns {string}
 */
export const proverb = (...args) => {
  let last = args[args.length - 1]?.qualifier ? `${args.pop().qualifier} ${args[0]}` : args[0];
  return args.map((s, n) => (n < args.length - 1) ?
    `For want of a ${s} the ${args[n + 1]} was lost.` : `And all for the want of a ${last}.`).join('\n');
};
