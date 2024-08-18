const NUMBERS = { ones: 1, twos: 2, threes: 3, fours: 4, fives: 5, sixes: 6 };

/**
 * @param {number[]} dice
 * @param {string} category
 * @returns {number}
 */
export const score = (dice, category) => {
  let sd = Array.from(dice).sort((a, b) => a - b);
  let u = new Set(dice);
  switch (category) {
    case 'four of a kind': return (u.size <= 2 && sd[1] == sd[3]) ? 4 * sd[1] : 0;
    case 'full house': return (u.size == 2 && sd[0] == sd[1] && sd[3] == sd[4]) ? sd.reduce((acc, d) => acc + d, 0) : 0;
    case 'little straight': return (u.size == 5 && sd[0] == 1 && sd[4] == 5) ? 30 : 0;
    case 'big straight': return (u.size == 5 && sd[0] == 2 && sd[4] == 6) ? 30 : 0;
    case 'yacht': return (u.size == 1) ? 50 : 0;
    case 'choice': return sd.reduce((acc, d) => acc + d, 0);
    default: return sd.reduce((acc, d) => (d == NUMBERS[category]) ? acc + d : acc, 0);
  }
};
