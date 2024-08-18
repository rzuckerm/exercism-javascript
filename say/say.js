const FIRST_10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const MULTIPLES_OF_10 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const POWERS = [[' billion', 1_000_000_000], [' million', 1_000_000], [' thousand', 1_000], ['', 1]];

/**
 * @param {number} n
 * @returns {string}
 */
export const say = (n) => {
  let x;
  switch (true) {
    case n < 0 || n >= 1e12: throw new Error('Number must be between 0 and 999,999,999,999.');
    case n < 10: return FIRST_10[n];
    case n < 20: return TEENS[n - 10];
    case n < 100: return MULTIPLES_OF_10[Math.floor(n / 10)] + ((x = n % 10) ? `-${say(x)}` : '');
    case n < 1000: return `${say(Math.floor(n / 100))} hundred` + ((x = n % 100) ? ` ${say(x)}` : '');
    default: return POWERS.map(([w, d]) => (x = Math.floor(n / d) % 1000) ? `${say(x)}${w}` : '').filter((s) => s).join(' ');
  }
};
