export class InvalidInputError extends Error { }

export class Robot {
  static DIRS = ['north', 'east', 'south', 'west'];
  static INCS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  bearing = 'north';
  coordinates = [0, 0];

  place({ x, y, direction }) {
    if (!Robot.DIRS.includes(direction)) { throw new InvalidInputError('Invalid input'); }
    this.coordinates = [x, y];
    this.bearing = direction;
  }

  evaluate(instructions) {
    for (let ins of [...instructions]) {
      let n = Robot.DIRS.indexOf(this.bearing), x = this.coordinates[0], y = this.coordinates[1];
      if (ins == 'L') { this.bearing = Robot.DIRS[(n + 3) % 4]; }
      else if (ins == 'R') { this.bearing = Robot.DIRS[(n + 1) % 4]; }
      else if (ins == 'A') { this.coordinates = [x + Robot.INCS[n][0], y + Robot.INCS[n][1]]; }
    }
  }
}
