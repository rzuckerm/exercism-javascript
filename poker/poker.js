/**
 * @param {string[]} hands
 * @returns {string[]}
 */
export const bestHands = (hands) => hands.map((hand) => rankHand(hand)).sort((a, b) => compare(b[0], a[0]))
  .filter((r, _, ranked) => compare(r[0], ranked[0][0]) == 0).map((r) => r[1]);

/**
 * @param {number[]}
 * @return {number}
 */
const compare = (a, b) => a.reduce((acc, x, n) => acc || (x - b[n]), 0);

/**
 * @param {number[]} values
 * @returns {boolean}
 */
const isStraight = (values) => values.slice(1).every((v, n) => v == values[n] - 1);

/**
 * @param {string} hand 
 * @returns {[number[6], string]}
 */
const rankHand = (hand) => {
  // Convert face value to a number from 2 to 14, where: J=11, Q=12, K=13, A=14,
  // and sort in descending order
  let values = hand.split(' ').map((c) => Number(c.slice(0, -1).replace(/[JQKA]/, (m) => 11 + 'JQKA'.indexOf(m))))
    .sort((a, b) => b - a);

  // Convert Ace Low Straight
  values = (compare(values, [14, 5, 4, 3, 2]) == 0) ? [5, 4, 3, 2, 1] : values;

  // Organize values so that values with highest frequency are first and cards with
  // same frequency are in descending order
  let orgValues = Object.entries(values.reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {}))
    .sort((a, b) => (b[1] - a[1]) || (b[0] - a[0])).flatMap(([v, n]) => Array(n).fill(Number(v)));

  // Find best rank based on organized values and whether this is a Flush
  let isFlush = hand.split(' ').every((c, _, h) => c.at(-1) == h[0].at(-1)), rank = 0; // High Card
  if (orgValues[0] == orgValues[4]) { rank = 9; } // Five of a Kind
  else if (isFlush && isStraight(orgValues)) { rank = 8; } // Straight Flush
  else if (orgValues[0] == orgValues[3]) { rank = 7; } // Four of a Kind
  else if (orgValues[0] == orgValues[2] && orgValues[3] == orgValues[4]) { rank = 6; } // Full House
  else if (isFlush) { rank = 5; } // Flush
  else if (isStraight(orgValues)) { rank = 4; } // Straight
  else if (orgValues[0] == orgValues[2]) { rank = 3; } // Three of a Kind
  else if (orgValues[0] == orgValues[1] && orgValues[2] == orgValues[3]) { rank = 2; } // Two Pair
  else if (orgValues[0] == orgValues[1]) { rank = 1; } // One Pair

  return [[rank, ...orgValues], hand];
}
