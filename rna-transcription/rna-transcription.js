const RNA_TABLE = { G: 'C', C: 'G', T: 'A', A: 'U' };

/**
 * @param {string} dna
 * @returns {string}
 */
export const toRna = (dna) => dna.split('').map((c) => RNA_TABLE[c]).join('');
