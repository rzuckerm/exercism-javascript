const OCR_NUMBERS = [
  " _     _  _     _  _  _  _  _ ",
  "| |  | _| _||_||_ |_   ||_||_|",
  "|_|  ||_  _|  | _||_|  ||_| _|",
  "                              ",
];

/**
 * @param {string} inputGrid
 * @returns {string[]}
 */
export const convert = (inputGrid) => {
  let rows = inputGrid.split('\n');
  return [...Array(rows.length / 4).keys()].map((n) => convert_row(rows.slice(n * 4, n * 4 + 4))).join(',');
};

/**
 * @param {string[]} row
 * @returns string
 */
const convert_row = (row) => [...Array(row[0].length / 3).keys()].map((c) => convert_cell(row, c * 3)).join('');

/**
 * @param {string} row
 * @param {number} c
 * @returns {string}
 */
const convert_cell = (row, c) => {
  for (let n = 0; n <= 9; n++) {
    if ([0, 1, 2, 3].every((k) => row[k].slice(c, c + 3) == OCR_NUMBERS[k].slice(n * 3, n * 3 + 3))) {
      return n;
    }
  }

  return '?';
}
