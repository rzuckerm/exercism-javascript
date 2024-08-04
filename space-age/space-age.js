const PLANET_YEARS = {
  mercury: 0.2408467, venus: 0.61519726, earth: 1.0, mars: 1.8808158,
  jupiter: 11.862615, saturn: 29.447498, uranus: 84.016846, neptune: 164.79132
};
const EARTH_YEAR = 31557600;

/**
 * @param {string} planet
 * @param {number} seconds
 * @returns {number}
 */
export const age = (planet, seconds) => +(seconds / (EARTH_YEAR * PLANET_YEARS[planet])).toFixed(2);
