/// <reference path="./global.d.ts" />
// @ts-check

/**
 * @param {Number|null|undefined} timeLeft
 * @returns String
 */
export function cookingStatus(timeLeft) {
    return (Number(timeLeft) > 0) ? 'Not done, please wait.' :
        ((timeLeft === 0) ? 'Lasagna is done.' : 'You forgot to set the timer.');
}

/**
 * @param {Number[]} layers 
 * @param {Number} prepTimePerLayer 
 * @returns {Number}
 */
export function preparationTime(layers, prepTimePerLayer = 2) {
    return prepTimePerLayer * layers.length;
}

/**
 * @param {String[]} layers 
 * @returns {Quantities}
 */
export function quantities(layers) {
    let numNoodles = layers.filter((x) => x == 'noodles').length;
    let numSauce = layers.filter((x) => x == 'sauce').length;
    return { noodles: 50 * numNoodles, sauce: 0.2 * numSauce };
}

/**
 * @param {String[]} friendsList 
 * @param {String[]} myList 
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList.slice(-1)[0]);
}

/**
 * @param {Object} recipe
 * @param {Number} portions
 */
export function scaleRecipe(recipe, portions) {
    return Object.fromEntries(Object.entries(recipe).map(([ingredient, amount]) => [ingredient, amount * portions / 2]));
}
