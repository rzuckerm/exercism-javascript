export class Change {
  /**
   * @param {number[]} coinArray
   * @param {number} target
   * @returns {number}
   * @throws {Error}
   */
  calculate(coinArray, target) {
    if (target < 0) { throw new Error('Negative totals are not allowed.'); }
    let chg = { 0: [] };
    for (let t = Math.min(...coinArray); t <= target; t++) {
      coinArray.filter((c) => c <= t).forEach((c) => 
        chg[t] = (chg[t - c] && (!chg[t] || chg[t].length > 1 + chg[t - c].length)) ? [c, ...chg[t - c]] : chg[t]);
    }

    if (!chg[target]) { throw new Error(`The total ${target} cannot be represented in the given currency.`); }
    return chg[target];
  }
}
