const ALLERGIES = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

export class Allergies {
  /**
   * @param {number} code 
   */
  constructor(code) {
    this.allergies = ALLERGIES.filter((_, n) => code & (1 << n));
  }

  /**
   * @returns {string[]}
   */
  list = () => this.allergies;

  /**
   * 
   * @param {string} allergen 
   */
  allergicTo = (allergen) => this.allergies.includes(allergen);
}
