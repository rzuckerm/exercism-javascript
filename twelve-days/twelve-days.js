const D = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const L = [
  'a Partridge in a Pear Tree.\n', 'two Turtle Doves, and', 'three French Hens,', 'four Calling Birds,',
  'five Gold Rings,', 'six Geese-a-Laying,', 'seven Swans-a-Swimming,', 'eight Maids-a-Milking,',
  'nine Ladies Dancing,', 'ten Lords-a-Leaping,', 'eleven Pipers Piping,', 'twelve Drummers Drumming,',
];

/**
 * @param {number} v1
 * @param {number|undefined} v2
 */
export const recite = (v1, v2 = v1) => D.slice(v1 - 1, v2).map((d, n) =>
  `On the ${d} day of Christmas my true love gave to me: ` + L.slice(0, n + v1).reverse().join(' ')).join('\n');
