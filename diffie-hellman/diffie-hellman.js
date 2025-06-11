export class DiffieHellman {
  /**
   * @param {number} p
   * @param {number} g
   * @throws {Error}
   */
  constructor(p, g) {
    if (!_isPrime(p) || !_isPrime(g)) { throw new Error('p and g must be prime'); }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) { throw new Error('private key is out of range'); }
    return (this.g ** privateKey) % this.p;
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2) + 2);
  }

  getSecret(theirPublicKey, myPrivateKey) { return (theirPublicKey ** myPrivateKey) % this.p; }
}

/**
 * @param {number} n
 * @returns {boolean}
 */
const _isPrime = (n) => {
  for (var p = 2, found = true; p * p <= n && (found = (n % p) != 0); p++);
  return found;
}
