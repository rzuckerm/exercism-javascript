/**
 * @param {number[][2]} dominoes
 * @returns {number[][2]|null}
 */
export const chain = (dominoes) => (dominoes.length) ? findChain(0, dominoes, getChainables(dominoes), new Set(), []) : [];

/**
 * @param {number[][2]} dominoes
 * @returns {number[][]}
 */
const getChainables = (dominoes) => {
  // Figure out which dominoes can be chained together and in which orientation
  let chainables = [];
  dominoes.forEach(([f1, s1], i) => {
    for (let s of [s1, f1]) {
      chainables.push(dominoes.reduce((acc, [f2, s2], j) =>
        (i != j && [f2, s2].includes(s)) ? acc.concat(2 * j + (s == s2)) : acc, []));
    }
  });

  // Return chainables if all dominoes have at least one match, else empty chainable
  return chainables.every((c) => c.length > 0) ? chainables : [[]];
}

/**
 * @param {number} key 
 * @param {number[][2]} dominoes
 * @param {number[][]} chainables
 * @param {Set[number]} visited
 * @param {number[][2]} chain
 * @returns {number[][2]|null}
 */
const findChain = (key, dominoes, chainables, visited, chain) => {
  // Indicate this domino has been tried
  let [index, first] = [Math.floor(key / 2), key % 2];
  visited.add(index);

  // Append domino in desired orientation to chain
  chain.push([dominoes[index][first], dominoes[index][1 - first]]);

  // If all dominoes are in chain, indicate match if first and last dominoes match
  if (chain.length == dominoes.length) {
    return (chain[0][0] == chain.at(-1)[1]) ? chain : null;
  }

  // Recursively try each domino that can be chained with this one
  let nextChain;
  for (let nextKey of chainables[key]) {
    if (!visited.has(Math.floor(nextKey / 2)) && (nextChain = findChain(nextKey, dominoes, chainables, visited, chain))) {
      return nextChain;
    }
  }

  // Remove this domino from the chain and indicate no match
  visited.delete(index);
  chain.pop();
  return null;
}
