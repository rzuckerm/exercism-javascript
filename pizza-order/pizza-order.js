/// <reference path="./global.d.ts" />
//
// @ts-check

const PRICES = { 'Margherita': 7, 'Caprese': 9, 'Formaggio': 10, 'ExtraSauce': 1, 'ExtraToppings': 2 };

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza | Extra} first item
 * @param {Extra[]} rest rest of items
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(first, ...rest) {
  return (first === undefined) ? 0 : PRICES[first] + pizzaPrice(...rest);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, order) => acc + pizzaPrice(order.pizza, ...order.extras), 0);
}
