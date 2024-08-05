export class ComplexNumber {
  /**
   * @param {number} r
   * @param {number} i
   */
  constructor(r = 0, i = 0) {
    this.real = r;
    this.imag = i;
  }

  /**
   * @param {ComplexNumber} rhs
   * @return {ComplexNumber}
   */
  add(rhs) { return new ComplexNumber(this.real + rhs.real, this.imag + rhs.imag); }

  /**
   * @param {ComplexNumber} rhs
   * @return {ComplexNumber}
   */
  sub(rhs) { return new ComplexNumber(this.real - rhs.real, this.imag - rhs.imag); }

  /**
   * @param {ComplexNumber} rhs
   * @return {ComplexNumber}
   */
  mul(rhs) {
    return new ComplexNumber(this.real * rhs.real - this.imag * rhs.imag, this.imag * rhs.real + this.real * rhs.imag);
  }

  /**
   * @param {ComplexNumber} rhs
   * @return {ComplexNumber}
   */
  div(rhs) {
    let den = rhs.real * rhs.real + rhs.imag * rhs.imag;
    return new ComplexNumber((this.real * rhs.real + this.imag * rhs.imag) / den,
      (this.imag * rhs.real - this.real * rhs.imag) / den);
  }

  /**
   * @return {ComplexNumber}
   */
  get abs() { return Math.sqrt(this.real * this.real + this.imag * this.imag); }

  /**
   * @return {ComplexNumber}
   */
  get conj() { return new ComplexNumber(this.real, (this.imag) ? -this.imag : 0); }

  /**
   * @return {ComplexNumber}
   */
  get exp() {
    let exp = Math.exp(this.real);
    return new ComplexNumber(exp * Math.cos(this.imag), exp * Math.sin(this.imag));
  }
}
