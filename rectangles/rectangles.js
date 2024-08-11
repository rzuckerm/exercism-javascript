function Connections() {
  this.hConns = new Set();
  this.vConns = new Set();
}

/**
 * @param {string[]} lines
 * @returns {number}
 */
export const count = (lines) => {
  let conns = {};

  // Find horizonal connections
  for (let [r, line] of lines.entries()) {
    let currCol = null;
    for (let [c, ch] of [...line].entries()) {
      if (ch == '+') {
        conns[[r, c]] = new Connections();
        if (currCol === null) {
          currCol = c;
        } else {
          conns[[r, currCol]].hConns.forEach((c2) => conns[[r, c2]].hConns.add(c));
          conns[[r, currCol]].hConns.add(c);
        }
      } else if (ch != '-') {
        currCol = null;
      }
    }
  }

  // Find vertical connections
  let numCols = Math.max(...lines.map((line) => line.length), 0);
  for (let c = 0; c < numCols; c++) {
    let currRow = null;
    for (let r = 0; r < lines.length; r++) {
      let ch = lines[r][c] ?? ' ';
      if (ch == '+') {
        if (currRow === null) {
          currRow = r;
        } else {
          conns[[currRow, c]].vConns.forEach((r2) => conns[[r2, c]].vConns.add(r));
          conns[[currRow, c]].vConns.add(r);
        }
      } else if (ch != '|') {
        currRow = null;
      }
    }
  }

  //    a            b
  // (r1, c1) --- (r1, c2)
  //    |            |
  // (r2, c1) --- (r2, c2)
  //    c            d
  //
  // Rectangle if all the following are true:
  // - Point d exists
  // - Point b and d are connected
  // - Point c and d are connected
  let count = 0;
  for (let [key, ptConns] of Object.entries(conns)) {
    let [r1, c1] = key.split(',').map(Number);
    ptConns.vConns.forEach((r2) => ptConns.hConns.forEach((c2) =>
      count += [r2, c2] in conns && conns[[r1, c2]].vConns.has(r2) && conns[[r2, c1]].hConns.has(c2)));
  }

  return count;
}
