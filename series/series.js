/**
 * @param {string} series 
 */
export function Series(series) {
  this.series = [...series].map(Number);

  /**
   * @param {number} sliceLength
   * @returns {number[][]}
   */
  this.slices = (sliceLength) => {
    throwIf(this.series.length == 0, 'series cannot be empty');
    throwIf(sliceLength > this.series.length, 'slice length cannot be greater than series length');
    throwIf(sliceLength == 0, 'slice length cannot be zero');
    throwIf(sliceLength < 0, 'slice length cannot be negative');
    return this.series.slice(0, this.series.length - sliceLength + 1).map((_, n) => this.series.slice(n, n + sliceLength));
  }
}

/**
 * @param {boolean} cond 
 * @param {string} message 
 */
throwIf = (cond, message) => { if (cond) { throw new Error(message); } };
