/**
 * @param {number} n
 * @returns {number}
 */
export const abilityModifier = (n) => {
  if (n < 3) { throw new Error('Ability scores must be at least 3'); }
  if (n > 18) { throw new Error('Ability scores can be at most 18'); }
  return Math.floor(n / 2) - 5;
}

/**
 * @returns {number}
 */
const roll = () => Math.floor(6 * Math.random() + 1);

export class Character {
  /**
   * @returns {number}
   */
  static rollAbility() { return [roll(), roll(), roll(), roll()].sort().slice(-3).reduce((acc, d) => acc + d, 0); }

  constructor() {
    ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'].forEach(
      (x) => this[x] = Character.rollAbility());
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
}
