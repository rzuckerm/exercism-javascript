/**
 * @param {string[]} input
 * @returns {string[]}
 */
export const annotate = (input) => input.map((row, r) => [...row].map((ch, c) => (ch == '*') ? ch :
  ([[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].reduce(
    (acc, [dr, dc]) => (input[r + dr]?.[c + dc] == '*') ? acc + 1 : acc, 0)) || ' ').join(''));
