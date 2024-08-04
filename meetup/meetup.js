const WEEKS = { first: 0, second: 1, third: 2, fourth: 3, last: -1, teenth: 0 };
const DAYS = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };

/**
 * @param {number} year
 * @param {number} month
 * @param {string} week
 * @param {string} day
 */
export const meetup = (year, month, week, day) => {
  let date = new Date(year, (week == "last") ? month : month - 1, (week == "teenth") ? 13 : 1);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7 * WEEKS[week] + (7 + DAYS[day] - date.getDay()) % 7);
};
