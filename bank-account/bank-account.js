export class BankAccount {
  #balance = null;

  open() {
    this._errIf(this.#balance !== null, "Account already open");
    this.#balance = 0;
  }

  close = () => this._doIfOpen(() => this.#balance = null);

  deposit = (amount) => this._doIfOpen(() => this._updateBalance(amount, 1));

  withdraw = (amount) => this._doIfOpen(() => this._updateBalance(amount, -1));

  get balance() {
    return this._doIfOpen(() => this.#balance);
  }

  _doIfOpen(func) {
    this._errIf(this.#balance === null, "Account not open");
    return func();
  }

  _updateBalance(amount, multiplier) {
    this._errIf(amount < 0, "Amount cannot be negative");
    let newBalance = this.#balance + multiplier * amount;
    this._errIf(newBalance < 0, "Balance cannot be negative");
    this.#balance = newBalance;
  }

  _errIf(cond, message) { if (cond) { throw new ValueError(message); } }
}

export class ValueError extends Error {}
