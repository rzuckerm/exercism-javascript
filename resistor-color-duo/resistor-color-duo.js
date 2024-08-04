/**
 * @param {string[]} colors
 * @returns {number}
 */
export const decodedValue = (colors) => 10 * COLORS.indexOf(colors[0]) + COLORS.indexOf(colors[1]);

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
