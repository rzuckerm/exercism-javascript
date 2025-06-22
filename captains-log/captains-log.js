// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export const randomShipRegistryNumber = () => `NCC-${Math.floor(Math.random() * 9000 + 1000)}`

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export const randomStardate = () => Math.random() * 1000 + 41000;

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
const PLANET_CLASSES = "DHJKLMNRTY"
export const randomPlanetClass = () => PLANET_CLASSES[Math.floor(Math.random() * PLANET_CLASSES.length)];
