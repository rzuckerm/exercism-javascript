/**
 * @param {string} word
 * @param {string[]} candidates
 */
export const findAnagrams = (word, candidates) => {
  word = word.toLowerCase();
  let sortedWord = [...word].sort().join('');
  return candidates.filter((cword) => {
    cword = cword.toLowerCase();
    return cword != word && [...cword].sort().join('') == sortedWord;
  });
};
