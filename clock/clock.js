export class Clock {
  /**
   * @param {number} hour
   * @param {number} minute
   */
  constructor(hour, minute = 0) {
    this.minute = (1440 + (hour * 60 + minute) % 1440) % 1440;
  }

  /**
   * @returns {string}
   */
  toString = () => ('' + Math.floor(this.minute / 60)).padStart(2, '0') + ':' + ('' + (this.minute % 60)).padStart(2, '0');

  /**
   * @param {number} minute
   * @returns {Clock}
   */
  plus = (minute) => new Clock(0, this.minute + minute);

  /**
   * @param {number} minute
   * @returns {Clock}
   */
  minus = (minute) => new Clock(0, this.minute - minute);

  /**
   * @param {Clock} other
   * @returns {boolean}
   */
  equals = (other) => this.minute == other.minute;
}
