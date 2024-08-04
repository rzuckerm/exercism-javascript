const ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];

/**
 * @param {number} code
 * @returns {string[]}
 */
export const commands = (code) => ACTIONS.filter((_, n) => code & (1 << n))[code & (1 << 4) ? 'reverse' : 'slice']();
