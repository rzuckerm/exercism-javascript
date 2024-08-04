const SOUNDS = {3: "Pling", 5: "Plang", 7: "Plong"};

/**
 * @param {number} n
 * @returns {string}
 */
export const convert = (n) => Object.entries(SOUNDS).filter(([f, _]) => (n % f) == 0).map(([_, s]) => s).join('') || `${n}`;
