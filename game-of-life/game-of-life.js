export class GameOfLife {
  DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  constructor(matrix) { this.matrix = matrix; }

  tick() {
    this.matrix = this.matrix.map((row, r) => row.map((cell, c) => {
      let n = this.DIRECTIONS.reduce((acc, [dr, dc]) => acc + ((this.matrix[r + dr]?.[c + dc]) ? 1 : 0), 0);
      return Number((cell && (n == 2 || n == 3)) || (!cell && n == 3));
    }));
  }

  state() { return this.matrix; }
}
