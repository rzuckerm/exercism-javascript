export class QueenAttack {
  /**
   * @param {object{black: number[2]|undefined[2], white: number[2]|undefined[2]}} param0
   * @throws {Error}
   */
  constructor({ black = [0, 3], white = [7, 3] } = {}) {
    if ([...black, ...white].some((p) => p < 0 || p > 7)) { throw new Error('Queen must be placed on the board'); }
    if (black[0] == white[0] && black[1] == white[1]) { throw new Error('Queens cannot share the same space'); }
    this.black = black;
    this.white = white;
  }

  /**
   * @returns {string[]}
   */
  toString() {
    let board = [...Array(8)].map(() => Array(8).fill('_'));
    board[this.black[0]][this.black[1]] = 'B';
    board[this.white[0]][this.white[1]] = 'W';
    return board.map((row) => row.join(' ')).join('\n');
  }

  /**
   * @returns {boolean}
   */
  get canAttack() {
    let [dr, dc] = [Math.abs(this.black[0] - this.white[0]), Math.abs(this.black[1] - this.white[1])];
    return dr == 0 || dc == 0 || dr == dc;
  }
}
