/**
 * @param {string} strand
 * @returns {string}
 */
export function countNucleotides(strand) {
  return [...strand].reduce((acc, c) => {
    let i = 'ACGT'.indexOf(c);
    if (i < 0) { throw new Error('Invalid nucleotide in strand'); }
    acc[i] += 1;
    return acc;
  }, [0, 0, 0, 0]).join(' ');
}
