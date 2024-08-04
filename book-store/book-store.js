const BOOK_PRICE = 800;
const DISCOUNT_MULTIPLIER = [0, 100, 2 * 95, 3 * 90, 4 * 80, 5 * 75];

/**
 * @param {number[]} books
 * @returns {number}
 */
export const cost = (books) => {
  // Get count of each book number
  let counts = [0, 0, 0, 0, 0];
  for (let book of books) {
    counts[book - 1]++;
  }

  // Filter out zeros and reverse sort the counts
  counts = counts.filter((n) => n != 0).sort((a, b) => b - a);

  // Return lowest price
  return findLowestPrice(counts);
};

/**
 * @param {number[]} counts
 * @returns {number}
 */
const findLowestPrice = (counts) => {
  let lowestPrice = BOOK_PRICE * counts.reduce((acc, n) => acc + n, 0);
  let n = counts.filter((x) => x != 0).length;
  for (let i = 2; i <= n; i++) {
    let newCounts = counts.map((c, k) => c - (k < i)).sort((a, b) => b - a);
    lowestPrice = Math.min(lowestPrice, BOOK_PRICE * DISCOUNT_MULTIPLIER[i] / 100 + findLowestPrice(newCounts));
  }

  return lowestPrice;
}
