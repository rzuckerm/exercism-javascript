class CircularBuffer {
  /**
   * @param {int} n 
   */
  constructor(n) {
    this.buffer = Array(n);
    this.clear();
  }

  /**
   * @param {any} data
   * @throws {BufferFullError}
   */
  write(data) {
    if (this.count >= this.buffer.length) { throw new BufferFullError(); }
    this.buffer[(this.rd + (this.count++)) % this.buffer.length] = data;
  }

  /**
   * @returns {any}
   * @throws {BufferFullError}
   */
  read() {
    if (this.count < 1) { throw new BufferEmptyError(); }
    this.rd = (this.rd + 1) % this.buffer.length;
    this.count--;
    return this.buffer[(this.rd + this.buffer.length - 1) % this.buffer.length];
  }

  /**
   * @param {any} data
   */
  forceWrite(data) {
    if (this.count >= this.buffer.length) { this.read(); }
    this.write(data);
  }

  clear() {
    this.rd = 0;
    this.count = 0;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error { }

export class BufferEmptyError extends Error { }
