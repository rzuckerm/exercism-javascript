// Number the board like this:
//
// 0 | 1 | 2
// - + - + -
// 3 | 4 | 5
// - + - + -
// 6 | 7 | 8
//
// The first value is the starting position, the second value is the increment
const MOVES = [[0, 1], [3, 1], [6, 1], [0, 3], [1, 3], [2, 3], [0, 4], [2, 2]];

/**
 * @param {string[]} board
 * @returns {string}
 * @throws {Error}
 */
export const gamestate = (board) => {
  board = board.flatMap((row) => [...row]);
  let [numX, numO] = [count(board, 'X'), count(board, 'O')];
  let [winX, winO] = [win(board, 'X'), win(board, 'O')];
  if (numX > numO + 1) { throw new Error('Wrong turn order: X went twice'); }
  if (numO > numX) { throw new Error('Wrong turn order: O started'); }
  if (winX && winO) { throw new Error('Impossible board: game should have ended after the game was won'); }
  return (winX || winO) ? 'win' : ((numX + numO) < 9 ? 'ongoing' : 'draw');
};

/**
 * @param {string[]} board
 * @param {string} piece
 * @returns {number}
 */
const count = (board, piece) => board.filter((square) => square == piece).length;

/**
 * @param {string[]} board
 * @param {string} piece
 * @returns {boolean}
 */
const win = (board, piece) => MOVES.some(([start, inc]) => [0, 1, 2].every((k) => board[start + k * inc] == piece));
