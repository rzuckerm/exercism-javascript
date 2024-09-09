export class ZebraPuzzle {
  static ITEMS = {
    nation: ['Norwegian', 'Spaniard', 'Englishman', 'Ukranian', 'Japanese'],
    drink: ['Tea', 'Orange Juice', 'Milk', 'Water', 'Coffee'],
    smoke: ['Kools', 'Old Gold', 'Chesterfield', 'Lucky Strike', 'Parliament'],
    pet: ['Dog', 'Horse', 'Snails', 'Fox', 'Zebra']
  };

  // Things that are known by working through the clues
  static KNOWNS = {
    // Since all colors are known, there's no need to include them
    // Color: ['Yellow', 'Blue', 'Red', 'Ivory', 'Green'],
    nation: ['Norwegian', '', 'Englishman', '', ''],
    drink: ['', '', 'Milk', '', 'Coffee'],
    smoke: ['Kools', '', '', '', ''],
    pet: ['', 'Horse', '', '', ''],
  };

  // Combinations of pets and smokes that are known by working through the clues
  static KNOWN_COMBOS = [
    [['pet', 'Fox'], ['smoke', 'Chesterfield']],
    [['smoke', 'Chesterfield'], ['pet', 'Fox']],
    [['smoke', 'Chesterfield'], ['pet', 'Fox']],
    [['pet', 'Fox'], ['smoke', 'Chesterfield']],
  ];

  /**
   * @returns {string}
   */
  waterDrinker() { return this._solve('drink', 'Water'); }

  /**
   * @returns {string}
   */
  zebraOwner() { return this._solve('pet', 'Zebra'); }

  /**
   * @param {string} category
   * @param {string} target
   * @returns {string}
   */
  _solve(category, target) {
    // Start with knowns and try known combinations
    for (let n = 0; n < ZebraPuzzle.KNOWN_COMBOS.length; n++) {
      let solution = structuredClone(ZebraPuzzle.KNOWNS);
      let [[category1, item1], [category2, item2]] = ZebraPuzzle.KNOWN_COMBOS[n];
      [solution[category1][n], solution[category2][n + 1]] = [item1, item2];

      // Get candidate nations, drinks, smokes, and pets
      let candidates = Object.fromEntries(Object.entries(ZebraPuzzle.ITEMS).map(([k, v]) =>
        [k, v.filter((s) => !solution[k].includes(s))]));
      let unknownIdxs = Object.fromEntries(Object.entries(solution).map(([k, v]) =>
        [k, v.reduce((acc, s, n) => (s) ? acc : [...acc, n], [])]));

      // Try out candidate nations
      for (let nations of permutations(candidates.nation)) {
        // Put this permutation of nations into the solution
        setSolution(solution.nation, nations, unknownIdxs.nation);

        // Try out candidate pets
        for (let pets of permutations(candidates.pet)) {
          // Put this permutation of pets into the solution
          setSolution(solution.pet, pets, unknownIdxs.pet);

          // If Spaniard doesn't have a dog, try another pet permutation
          if (!checkSolution(solution.nation, 'Spaniard', solution.pet, 'Dog')) { continue; }

          // Try out candidate smokes
          for (let smokes of permutations(candidates.smoke)) {
            // Put this permutation of smokes into the solution
            setSolution(solution.smoke, smokes, unknownIdxs.smoke);

            // If the Japanese doesn't smoke Parliament or the owner of snails doesn't smoke Old Gold,
            // try another smoke permutation
            if (!checkSolution(solution.nation, 'Japanese', solution.smoke, 'Parliament') ||
              !checkSolution(solution.pet, 'Snails', solution.smoke, 'Old Gold')) { continue; }

            // Try out candidate drinks
            for (let drinks of permutations(candidates.drink)) {
              // Put this permutation of drinks into the solution
              setSolution(solution.drink, drinks, unknownIdxs.drink);

              // If the Ukranian drinks tea and the drinker of orange juice smokes Lucky Strike,
              // return the solution
              if (checkSolution(solution.nation, 'Ukranian', solution.drink, 'Tea') &&
                checkSolution(solution.drink, 'Orange Juice', solution.smoke, 'Lucky Strike')) {
                return solution.nation[solution[category].indexOf(target)];
              }
            }
          }
        }
      }
    }

    return '';
  }
}

/**
 * Reference: https://stackoverflow.com/questions/9960908/permutations-in-javascript
 * @param {any[]} inputArray
 * @returns {any[][]}
 */
const permutations = (inputArray) => inputArray.reduce(function permute(res, item, key, arr) {
  return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, [])
    .map(function (perm) { return [item].concat(perm); }) || item);
}, []);

/**
 * @param {string[]} solution
 * @param {string[]} items
 * @param {string[]} indices
 */
const setSolution = (solution, items, indices) => indices.forEach((idx, n) => solution[idx] = items[n]);

/**
 * @param {string[]} items1
 * @param {string} item1
 * @param {string[]} items2
 * @param {string} item2
 * @returns {boolean}
 */
const checkSolution = (items1, item1, items2, item2) => items1.indexOf(item1) == items2.indexOf(item2);
