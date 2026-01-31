// Number the board like this:
//
// 0 | 1 | 2
// - + - + -
// 3 | 4 | 5
// - + - + -
// 6 | 7 | 8
//
// Each item is a list of positions that a piece must occupy to win
const WINS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

/**
 * @param {string[]} board
 * @returns {string}
 * @throws {Error}
 */
export const gamestate = (board) => {
  const boardStr = board.join('');
  const [numX, numO] = ['X', 'O'].map((c) => boardStr.split(c).length - 1);
  if (numX > numO + 1) { throw new Error('Wrong turn order: X went twice'); }
  if (numO > numX) { throw new Error('Wrong turn order: O started'); }

  const [winX, winO] = ['X', 'O'].map((c) => WINS.some((w) => w.every((pos) => boardStr[pos] == c)));
  const impossible = (winX && numX != numO + 1) || (winO && numX != numO);
  if (impossible) { throw new Error('Impossible board: game should have ended after the game was won'); }
  return (winX || winO) ? 'win' : ((numX + numO) < 9 ? 'ongoing' : 'draw');
};
