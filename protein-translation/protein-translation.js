const PROTEINS = {
  'AUG': 'Methionine', 'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine', 'UUA': 'Leucine', 'UUG': 'Leucine', 'UCU': 'Serine',
  'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine', 'UGU': 'Cysteine', 'UGC': 'Cysteine',
  'UGG': 'Tryptophan', 'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
};

/**
 * @param {string} codons
 * @returns {string[]}
 * @throws {Error}
 */
export const translate = (codons = '') => {
  let proteins = [];
  for (let i = 0, protein; i < codons.length && (protein = PROTEINS[codons.slice(i, i + 3)]) != 'STOP'; i += 3) {
    if (!protein) { throw new Error('Invalid codon'); }
    proteins.push(protein);
  }

  return proteins;
};
