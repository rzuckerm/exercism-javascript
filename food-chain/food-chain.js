const WRIGGLED = 'wriggled and jiggled and tickled inside her';
const V = [
  // Animal, 2nd line, 2nd line suffix (if any)
  ['fly', "I don't know why she swallowed the fly. Perhaps she'll die.", ''],
  ['spider', `It ${WRIGGLED}.`, ` that ${WRIGGLED}`], ['bird', 'How absurd to swallow a bird!', ''],
  ['cat', 'Imagine that, to swallow a cat!', ''], ['dog', 'What a hog, to swallow a dog!', ''],
  ['goat', 'Just opened her throat and swallowed a goat!', ''], ['cow', "I don't know how she swallowed a cow!", ''],
  ['horse', "She's dead, of course!", ''],
];

export class Song {
  /**
   * @param {number} n
   * @returns {string}
   */
  verse = (n) => `I know an old lady who swallowed a ${V[n - 1][0]}.\n${V[n - 1][1]}\n` +
      ((n >= 2 && n <= 7) ? ([...Array(n - 1).keys()].reverse().reduce((s, k) =>
        `${s}She swallowed the ${V[k + 1][0]} to catch the ${V[k][0]}${V[k][2]}.\n`, '') + `${V[0][1]}\n`) : '');

  verses = (start, end) => [...Array(end - start + 1).keys()].reduce((acc, n) => `${acc}${this.verse(n + start)}\n`, '');
}
