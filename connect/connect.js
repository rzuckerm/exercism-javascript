export class Board {
  /**
   * @param {string[]} board 
   */
  constructor(board) {
    board = board.map((line) => line.replaceAll(' ', '').split(''));
    let [nr, nc] = [board.length, board[0].length];
    this.endDims = { 'O': [nr - 1, nc - 1], 'X': [nc - 1, nr - 1] };
    this.pts = {};
    this.pts['O'] = board.flatMap((row, r) => row.reduce((acc, ch, c) => (ch == 'O') ? (acc.push([r, c]), acc) : acc, []));
    this.pts['X'] = board.flatMap((row, r) => row.reduce((acc, ch, c) => (ch == 'X') ? (acc.push([c, r]), acc) : acc, []));
  }

  /**
   * @returns {string}
   */
  winner() {
    for (let [p, pts] of Object.entries(this.pts)) {
      let ends = [...Array(this.endDims[p][1] + 1).keys()].filter((c) => inArray([this.endDims[p][0], c], pts))
        .map((c) => [this.endDims[p][0], c]);
      for (let c of [...Array(this.endDims[p][0] + 1).keys()].filter((c) => inArray([0, c], pts))) {
        if (_isWinner(pts, 0, c, ends, [])) { return p; }
      }
    }

    return '';
  }
}

/**
 * @param {number[2][]} pts
 * @param {number} r
 * @param {number} c
 * @param {number[2][]} ends
 * @param {number[2][]} path
 * @return {boolean}
 */
const _isWinner = (pts, r, c, ends, path) => {
  if (inArray([r, c], ends)) { return true; }
  for (let newPt of [[r - 1, c], [r - 1, c + 1], [r, c - 1], [r, c + 1], [r + 1, c - 1], [r + 1, c]]) {
    if (inArray(newPt, pts) && !inArray(newPt, path)) {
      path.push(newPt);
      if (_isWinner(pts, newPt[0], newPt[1], ends, path)) { return true; }
      path.pop();
    }
  }

  return false;
}

/**
 * @param {number[2]} pt
 * @param {number[2][]} pts
 * @return {boolean}
 */
const inArray = (pt, pts) => pts.some(([r, c]) => r == pt[0] && c == pt[1]);
