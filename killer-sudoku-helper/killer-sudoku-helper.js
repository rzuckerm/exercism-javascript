/**
 * @param {Number} sum
 * @param {Number} size
 * @param {Number[]} exclude
 * @returns {Number[][]}
 */
export const combinations = ({sum, size, exclude}) => {
  var possibilities = [...Array(9).keys()].map((idx) => idx + 1).filter((v) => !exclude.includes(v));
  return [...combos(possibilities, size)].filter((x) => sum == x.reduce((acc, v) => acc + v, 0));
};

/**
 * 
 * @param {Number[]} pool
 * @param {Number} r
 * @yields {Number[]}
 */
function* combos(pool, r) {
  // Based on https://docs.python.org/3/library/itertools.html#itertools.combinations
  var n = pool.length;
  var indices = [...Array(r).keys()];
  yield pool.slice(0, r);

  for (var i = r - 1; i >= 0;) {
    for (i = r - 1; i >= 0 && indices[i] == i + n  - r; i--);
    if (i >= 0) {
      indices[i]++;
      for (var j = i + 1; j < r; j++) { indices[j] = indices[j - 1] + 1; }
      yield indices.map((idx) => pool[idx]);
    }
  }
}
