// @ts-check

const DRINK_TIMES = {
  'Pure Strawberry Joy': 0.5, 'Energizer': 1.5, 'Green Garden': 1.5, 'Tropical Island': 3.0,
  'All or Nothing': 5.0
};
const WEDGES = { 'small': 6, 'medium': 8, 'large': 10 };

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return DRINK_TIMES[name] || 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  for (var count = 0, wedges = 0; count < limes.length && wedges < wedgesNeeded; count++) {
    wedges += WEDGES[limes[count]] || 0.0;
  }

  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  for (var orderNum = 0; orderNum < orders.length && timeLeft > 0; orderNum++) {
    timeLeft -= timeToMixJuice(orders[orderNum]);
  }

  return orders.slice(orderNum);
}
