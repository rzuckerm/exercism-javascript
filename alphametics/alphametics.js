const ALL_DIGITS = [...Array(10).keys()];

/**
 * @param {string} puzzle
 * @returns {object|null}
 */
export const solve = (puzzle) => {
  // Get words
  let words = puzzle.split(/\+|==/g).map((w) => w.trim());
  let nWords = words.length;

  // Separate out first letters from other letters
  let letters = [...new Set(words.join('').split(''))].sort();
  let firstLetters = [...new Set(words.map((w) => w[0]))].sort();
  let otherLetters = letters.filter((letter) => !firstLetters.includes(letter));
  letters = [...firstLetters, ...otherLetters];
  let [nFirst, nOther] = [firstLetters.length, otherLetters.length];

  // Improve runtime by precomputing the multiplier for each letter.
  //
  // Each multiplier is the sum of 10**position of the letter counted from
  // right to left for each word. The left side words added, and the right
  // side word is subtracted. Therefore, the solution will be the combination
  // of letter values multiplied by its corresponding multiplier that adds up
  // to zero
  let multipliers = Object.fromEntries(letters.map((l) => [l, 0]));
  words.forEach((word, n) => {
    let multiplier = (n < nWords - 1) ? 1 : -1;
    word.split('').reverse().forEach((letter, k) => multipliers[letter] += multiplier * (10 ** k));
  });

  // First letters can be 1-9; all other letters can be 0-9. Try all possible
  // values for first letters and other letters. Stop when solution is found
  let solution = null;
  for (let firstValues of permutations(ALL_DIGITS.slice(1), nFirst)) {
    if ((nOther < 1) && (solution = trySolution(letters, firstValues, multipliers))) { return solution; }

    let candidates = ALL_DIGITS.filter((n) => !firstValues.includes(n));
    for (let otherValues of permutations(candidates, nOther)) {
      if (solution = trySolution(letters, [...firstValues, ...otherValues], multipliers)) { return solution; }
    }
  }

  return null;
};

/**
 * 
 * @param {any[]} pool
 * @param {number} r
 * @yields {}
 */
function* permutations(pool, r) {
  // Based on https://docs.python.org/3/library/itertools.html#itertools.permutations
  let n = pool.length;
  let indices = [...Array(n).keys()]
  let cycles = [...Array(r).keys()].map((k) => n - k);
  yield pool.slice(0, r);

  do {
    var done = true;
    for (let i = r - 1; i >= 0; i--) {
      cycles[i]--;
      if (cycles[i] == 0) {
        indices = [...indices.slice(0, i), ...indices.slice(i + 1), indices[i]];
        cycles[i] = n - i;
      } else {
        let k = n - cycles[i];
        [indices[i], indices[k]] = [indices[k], indices[i]];
        yield indices.slice(0, r).map((k) => pool[k]);
        done = false;
        break;
      }
    }
  } while (!done);
}

/**
 * @param {string[]} letters
 * @param {number[]} values
 * @param {object} multipliers
 * @returns {object|null}
 */
const trySolution = (letters, values, multipliers) => {
  let solution = letters.reduce((acc, l, n) => ({ ...acc, [l]: values[n] }), {});
  return (Object.entries(multipliers).reduce((acc, [l, m]) => acc + m * solution[l], 0) == 0) ? solution : null;
}
