const NUMBERS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

/**
 * @param {number} initialBottlesCount
 * @param {number} takeDownCount
 * @returns {string}
 */
export const recite = (initialBottlesCount, takeDownCount) => [...Array(takeDownCount).keys()]
  .map((n) => verse(initialBottlesCount - n)).join('\n\n').split('\n');

/**
 * @param {number} n
 * @returns {string}
 */
const line = (n) => NUMBERS[n] + ` green bottle${(n != 1) ? 's' : ''} hanging on the wall`;

/**
 * @param {number} n
 * @returns {string}
 */
const verse = (n) => `${line(n)},\n${line(n)},\nAnd if one green bottle should accidentally fall,\n` +
  `There'll be ${line(n - 1).toLowerCase()}.`;
