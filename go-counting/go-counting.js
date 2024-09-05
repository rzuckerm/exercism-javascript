export class GoCounting {
  /**
   * @param {string[]} board
   */
  constructor(board) { this.board = board; }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {object}
   */
  getTerritory(x, y) {
    if (!this._isValid(x, y)) { return { error: 'Invalid coordinate' }; }

    let stack = [[x, y]], owners = new Set(), territory = {};
    while (stack.length) {
      [x, y] = stack.pop();
      if (this._isValid(x, y) && !territory[[x, y]]) {
        let stone = this.board[y][x];
        if (stone == ' ') {
          territory[[x, y]] = true;
          stack = stack.concat([[x, y - 1], [x - 1, y], [x, y + 1], [x + 1, y]]);
        } else {
          owners.add((stone == 'B') ? 'BLACK' : 'WHITE');
        }
      }
    }

    territory = _sortCoords(territory);
    return { owner: (owners.size == 1 && territory.length) ? [...owners.keys()].pop() : 'NONE', territory: territory };
  }

  /**
   * @returns {object}
   */
  getTerritories() {
    let result = { BLACK: {}, WHITE: {}, NONE: {} }, visited = {};
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        if (!visited[[x, y]]) {
          let { owner, territory } = this.getTerritory(x, y);
          territory = Object.fromEntries(territory.map(([x2, y2]) => [[x2, y2], true]));
          result[owner] = { ...result[owner], ...territory };
          visited = { ...visited, ...territory };
        }
      }
    }

    return {
      territoryBlack: _sortCoords(result.BLACK), territoryWhite: _sortCoords(result.WHITE),
      territoryNone: _sortCoords(result.NONE)
    };
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  _isValid(x, y) { return Boolean(this.board[y]?.[x]); }
}

/**
 * @param {object} c
 * @returns {number[2][]}
 */
const _sortCoords = (c) => [...Object.keys(c)].map((s) => s.split(',').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
