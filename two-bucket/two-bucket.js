export class TwoBucket {
  /**
   * @param {number} bucket1
   * @param {number} bucket2
   * @param {number} goal
   * @param {string} start
   * @throws {Error}
   */
  constructor(bucket1, bucket2, goal, start) {
    this.bucketNames = (start == 'one') ? ['one', 'two'] : ['two', 'one'];
    this.capacities = (start == 'one') ? [bucket1, bucket2] : [bucket2, bucket1];
    this.goal = goal;

    // No solution if goal is negative, larger than largest capacity, or does not divide
    // GCD of capacities evenly
    if (goal < 0 || goal > Math.max(bucket1, bucket2) || goal % _gcd(bucket1, bucket2) != 0) { throw new Error('No solution'); }
  }

  /**
   * @returns {object}
   */
  solve() {
    // Starting bucket is full, other bucket is empty
    let buckets = [this.capacities[0], 0];

    // Keep going until goal is met is with either bucket
    for (var i = 1, j = buckets.indexOf(this.goal); j < 0; i++, j = buckets.indexOf(this.goal)) {
      // Fill other bucket if goal can be met with it
      if (this.capacities[1] == this.goal) { buckets[1] = this.goal }
      // Empty other bucket if full
      else if (buckets[1] == this.capacities[1]) { buckets[1] = 0; }
      // Fill start bucket if empty
      else if (buckets[0] == 0) { buckets[0] = this.capacities[0]; }
      // Otherwise, pour maximum amount from one bucket into the other
      else {
        let total = buckets[0] + buckets[1];
        buckets = [Math.max(0, total - this.capacities[1]), Math.min(total, this.capacities[1])];
      }
    }

    return { moves: i, goalBucket: this.bucketNames[j], otherBucket: buckets[1 - j] };
  }
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
_gcd = (a, b) => {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
