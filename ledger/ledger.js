const CHANGE_FORMAT = { style: 'currency', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 2, maximumFractionDigits: 2 };
const LEDGER_FORMAT = {
  'en-US': { header: ['Date', 'Description', 'Change'], currencySign: 'accounting' },
  'nl-NL': { header: ['Datum', 'Omschrijving', 'Verandering'], currencySign: 'standard' },
}

/**
 * @param {string} date
 * @param {string} description
 * @param {number} change
 */
function LedgerEntry(date, description, change) {
  this.date = new Date(`${date} 00:00:00`);
  this.description = description;
  this.change = change;
}

/**
 * @param {string} date
 * @param {string} description
 * @param {number} change
 * @returns {LedgerEntry}
 */
export const createEntry = (date, description, change) => new LedgerEntry(date, description, change);

/**
 * @param {string} currency
 * @param {string} locale
 * @param {LedgerEntry[]} entries
 * @returns {string}
 */
export function formatEntries(currency, locale, entries) {
  const fmt = LEDGER_FORMAT[locale];
  const changeFormat = { ...CHANGE_FORMAT, currency: currency, currencySign: fmt.currencySign };

  entries.sort((a, b) => (a.date - b.date) || (a.change - b.change) || a.description.localeCompare(b.description));

  return [fmt.header.map((h, n) => h.padEnd([10, 25, 13][n])), ...entries.map((entry) => [
    entry.date.toLocaleString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }),
    (entry.description.length > 25) ? `${entry.description.substring(0, 22)}...` : entry.description.padEnd(25),
    (entry.change / 100).toLocaleString(locale, changeFormat).replace(/([^)])$/, '$1 ').padStart(13)
  ])].map((row) => row.join(' | ')).join('\n');
}
