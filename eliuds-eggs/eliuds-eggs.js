/**
 * @param {number} displayValue
 * @returns {number}
 */
export const eggCount = (displayValue) => [...Array(32).keys()].reduce((acc, n) => acc + ((displayValue >> n) & 1), 0);
