export class SplitSecondStopwatch {
  _state = 'stopped';

  constructor() { this.reset(); }

  get state() { return this._state; }

  get currentLap() { return this._formatTime(this._currentLap); }

  get total() { return this._formatTime(this._currentLap + this._previousLaps.reduce((acc, s) => acc + s, 0)); }

  get previousLaps() { return this._previousLaps.map(this._formatTime); }

  start() {
    if (this._state == 'running') { throw new Error('cannot start an already running stopwatch'); }
    this._state = 'running';
  }

  stop() {
    if (this._state != 'running') { throw new Error('cannot stop a stopwatch that is not running'); }
    this._state = 'stopped';
  }

  lap() {
    if (this._state != 'running') { throw new Error('cannot lap a stopwatch that is not running'); }
    this._previousLaps.push(this._currentLap);
    this._currentLap = 0;
  }

  reset() {
    if (this._state != 'stopped') { throw new Error('cannot reset a stopwatch that is not stopped'); }
    this._state = 'ready';
    this._currentLap = 0;
    this._previousLaps = [];
  }

  advanceTime(duration) {
    if (this._state == 'running') { this._currentLap += this._convertToTime(duration); }
  }

  _formatTime(s) {
    const hStr = Math.floor(s / 3600).toString().padStart(2, '0');
    const mStr = Math.floor((s / 60) % 60).toString().padStart(2, '0');
    const sStr = Math.floor(s % 60).toString().padStart(2, '0');
    return `${hStr}:${mStr}:${sStr}`;
  }

  _convertToTime(duration) { return duration.split(':').map((x) => parseInt(x)).reduce((acc, x) => 60 * acc + x, 0); }
}
