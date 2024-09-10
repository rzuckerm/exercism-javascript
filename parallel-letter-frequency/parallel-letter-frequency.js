const { Worker, isMainThread, parentPort, workerData } = require('node:worker_threads');

if (isMainThread) {
  module.exports.parallelLetterFrequency = async function (texts) {
    let counts = await Promise.all(texts.map((text) =>
      new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData: text });
        worker.on('message', (msg) => resolve(msg));
        worker.on('error', (err) => reject(err));
      })
    ));
    let totalCount = {};
    counts.forEach((count) => Object.entries(count).forEach(([c, n]) => totalCount[c] = (totalCount[c] ?? 0) + n));
    return totalCount;
  };
} else {
  let count = {}
  workerData.toLowerCase().split('').filter((c) => /\p{L}/u.test(c)).forEach((c) => count[c] = (count[c] ?? 0) + 1);
  parentPort.postMessage(count);
}
