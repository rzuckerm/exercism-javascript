/**
 * @param {string} words
 * @returns {string}
 */
export const translate = (words) => words.split(' ').map((word) => (/^(xr|yt|[aeiou])/.test(word) ? word :
  word.replace(/^(y|[bcdfghjklmnprstvwxz]*qu|[bcdfghjklmnpqrstvwxz]+)(.*)/, "$2$1")) + 'ay').join(' ');
