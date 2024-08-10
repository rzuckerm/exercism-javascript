export class Scale {
  static SHARPS = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  static FLATS = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

  /**
   * @param {string} tonic 
   */
  constructor(tonic) {
    this.scale = ('Fdgcf'.indexOf(tonic) >= 0 || tonic.endsWith('b')) ? Scale.FLATS : Scale.SHARPS;
    this.offset = this.scale.indexOf(tonic[0].toUpperCase() + tonic.slice(1));
  }

  /**
   * @returns {string[]}
   */
  chromatic = () => this.scale.map((_, n, a) => a[(n + this.offset) % 12]);

  /**
   * @param {string} intervals
   * @returns {string[]}
   */
  interval = (intervals) => [...intervals].reduce(([acc, n], i) =>
    [acc.concat(this.scale[n = (n + 1 + 'mMA'.indexOf(i)) % 12]), n], [[this.scale[this.offset]], this.offset])[0];
}
