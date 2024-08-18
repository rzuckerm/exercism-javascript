export class ResistorColorTrio {
  static COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  /**
   * @param {string[]} colors
   * @throws {error}
   */
  constructor(colors) {
    if (!colors.every((c) => ResistorColorTrio.COLORS.includes(c))) { throw new Error('invalid color'); }
    let v = colors.map((c) => ResistorColorTrio.COLORS.indexOf(c));
    let units = ['', 'kilo', 'mega', 'giga'][Math.floor((v[2] + 1) / 3)] + 'ohms';
    this.label = `Resistor value: ${(v[0] * 10 + v[1]) * 10 ** (((v[2] + 1) % 3) - 1)} ${units}`;
  }
}
