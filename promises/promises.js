/**
 * @param {function} func 
 * @returns {function}
 */
export const promisify = (func) => (...args) => new Promise((resolve, reject) =>
  func(...args, (err, result) => err ? reject(err) : resolve(result)));

/**
 * @param {Promise[]} promises 
 * @returns {any[]}
 */
export const all = (promises) => (promises) ? promises.reduce(async (acc, promise) =>
  (await acc).concat(await promise), Promise.resolve([])) : Promise.resolve();

/**
 * @param {Promise[]} promises 
 * @returns {any[]}
 */
export const allSettled = (promises) => (promises) ? promises.reduce(async (acc, promise) =>
  (await acc).concat(await promise.catch((err) => err)), Promise.resolve([])) : Promise.resolve();

/**
 * @param {Promise[]} promises 
 * @returns {Promise}
 */
export const race = (promises) => {
  if (!promises) { return Promise.resolve(); }
  if (promises.length == 0) { return Promise.resolve([]); }
  return new Promise((resolve, reject) => promises.forEach((promise) => promise.then(resolve, reject)));
};

/**
 * @param {Promise[]} promises 
 * @returns {Promise}
 */
export const any = (promises) => (promises) ? 
  new Promise((resolve, reject) => allSettled(promises.map((promise) => promise.then(resolve))).then(reject)) :
  Promise.resolve();
