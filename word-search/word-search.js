export default class WordSearch {
  /**
   * @param {string[]} grid
   */
  constructor(grid) { this.grid = grid; }

  /**
   * @param {string[]} words
   * @returns {Object}
   */
  find(words) { return words.reduce((acc, word) => ({ ...acc, [word]: this._findWord(word) }), {}); }

  /**
   * @param {string} word
   * @retun {Object|undefined}
   */
  _findWord(word) {
    let l = word.length - 1;
    for (let r = 0; r < this.grid.length; r++) {
      for (let c of [...this.grid[r]].map((_, c) => c).filter((c) => this.grid[r][c] === word[0])) {
        for (let [dr, dc] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
          if ([...word].every((ch, n) => ch === this.grid[r + n * dr]?.[c + n * dc])) {
            return { start: [r + 1, c + 1], end: [r + l * dr + 1, c + l * dc + 1] };
          }
        }
      }
    }
  }
}
