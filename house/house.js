const LINES = [
  'the house that Jack built.', 'the malt\nthat lay in', 'the rat\nthat ate', 'the cat\nthat killed',
  'the dog\nthat worried', 'the cow with the crumpled horn\nthat tossed', 'the maiden all forlorn\nthat milked',
  'the man all tattered and torn\nthat kissed', 'the priest all shaven and shorn\nthat married',
  'the rooster that crowed in the morn\nthat woke', 'the farmer sowing his corn\nthat kept',
  'the horse and the hound and the horn\nthat belonged to',
];

export class House {
  /**
   * @param {number} n
   * @returns {string[]}
   */
  static verse = (n) => ('This is ' + LINES.slice(0, n).reverse().join(' ')).split('\n');

  /**
   * @param {number} v1
   * @param {number} v2
   * @returns {string[]}
   */
  static verses = (v1, v2) => [...Array(v2 - v1 + 1).keys()].flatMap((n) => House.verse(n + v1).concat([''])).slice(0, -1);
}
