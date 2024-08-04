//              A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q   R  S  T  U  V  W  X  Y  Z
const SCORES = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

/**
 * @param {string} word
 * @return {number}
 */
export const score = (word) => [...word.toUpperCase()].reduce((acc, c) => acc + SCORES[c.charCodeAt(0) - 65], 0);
