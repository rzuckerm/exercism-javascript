export class Bowling {
  rolls = [];
  currFrame = [];
  frame = 0;

  /**
   * @param {number} pins
   * @throws {Error}
   */
  roll(pins) {
    throwIf(this.frame >= 10, 'Cannot roll after game is over');
    throwIf(pins < 0, 'Negative roll is invalid');
    throwIf(pins > (10 - this.currFrame.reduce((acc, x) => acc + x, 0) % 10), 'Pin count exceeds pins on the lane');

    this.rolls.push(pins);
    this.currFrame.push(pins);
    let [nr, total] = [this.currFrame.length, this.currFrame.reduce((acc, x) => acc + x, 0)];
    if (nr == 3 || (this.frame < 9 && (nr == 2 || total == 10)) || (this.frame >= 9 && nr == 2 && total < 10)) {
      this.frame++;
      this.currFrame = [];
    }
  }

  score() {
    throwIf(this.frame < 10, 'Score cannot be taken until the end of the game');
    let [total, n] = [0, 0];
    for (let i = 0; i < 10; i++) {
      let frameTotal = this.rolls[n] + this.rolls[n + 1];
      total += frameTotal + ((this.rolls[n] == 10 || frameTotal == 10) ? this.rolls[n + 2] : 0);
      n += (this.rolls[n] == 10) ? 1 : 2;
    }

    return total;
  }
}

/**
 * @param {boolean} cond
 * @param {string} msg
 * @throws {Error}
 */
const throwIf = (cond, msg) => { if (cond) { throw new Error(msg); } }
