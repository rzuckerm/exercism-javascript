export class InputCell {
  /**
   * @param {any} value 
   */
  constructor(value = undefined) {
    this.value = value;
    this.deps = [];
    this.updateCount = 0;
  }

  /**
   * @param {any} value 
   */
  setValue(value) {
    this.updateCount++;
    this.value = value;
    this.deps.forEach((dep) => dep.compute());
  }

  /**
   * @param {InputCell|ComputeCell} dep
   */
  addDependency(dep) { this.deps.push(dep); }
}

export class ComputeCell extends InputCell {
  /**
   * @param {InputCell|ComputeCell} inputCells
   * @param {function} fn
   */
  constructor(inputCells, fn) {
    super();
    this.inputCells = inputCells;
    this.fn = fn;
    this.callbacks = new Set();
    this.compute();
    inputCells.forEach((cell) => cell.addDependency(this));
  }

  compute() {
    // Don't recompute until values have settled
    if (this.inputCells.slice(1).every((cell) => cell.updateCount == this.inputCells[0].updateCount)) {
      let newValue = this.fn(this.inputCells);

      // Fire callbacks when value changes
      if (this.value != newValue) {
        this.setValue(newValue);
        this.callbacks.forEach((callback) => callback.values.push(callback.fn(this)));
      }
    }
  }

  /**
   * @param {CallbackCell} cb
   */
  addCallback(cb) { this.callbacks.add(cb); }

  /**
   * @param {CallbackCell} cb
   */
  removeCallback(cb) { this.callbacks.delete(cb); }
}

/**
 * @param {function} fn
 */
export function CallbackCell(fn) {
  this.fn = fn;
  this.values = [];
}
