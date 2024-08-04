const RESPONSES = ["Whatever.", "Whoa, chill out!", "Sure.", "Calm down, I know what I'm doing!", "Fine. Be that way!"];

/**
 * @param {string} message
 * @returns {string}
 */
export const hey = (message) => {
  let s = message.trim();
  let letters = s.replace(/[^a-zA-Z]+/, '');

  // bit 2        | bit 1    | bit 0    ||
  // empty string | question | all caps || result
  // 0            | 0        | 0        || Whatever.
  // 0            | 0        | 1        || Whoa, chill out!
  // 0            | 1        | 0        || Sure.
  // 0            | 1        | 1        || Calm down, I know what I'm doing!
  // 1            | 0        | 0        || Fine. Be that way!
  let code = 4 * (s.length == 0) + 2 * s.endsWith('?') + (letters.length && letters == letters.toUpperCase());
  return RESPONSES[code];
};
