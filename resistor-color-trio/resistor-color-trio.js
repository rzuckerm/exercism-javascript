/**
 * @param {string[]} colors
 * @throws {error}
 */
export function ResistorColorTrio(colors) {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  let v = colors.map((c) => COLORS.includes(c) ? COLORS.indexOf(c) : (() => { throw Error('invalid color') })());
  let units = ['', 'kilo', 'mega', 'giga'][Math.floor((v[2] + 1) / 3)] + 'ohms';
  this.label = `Resistor value: ${(v[0] * 10 + v[1]) * 10 ** (((v[2] + 1) % 3) - 1)} ${units}`;
}
