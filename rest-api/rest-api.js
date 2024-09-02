export class RestAPI {
  /**
   * @param {object} db 
   */
  constructor(db = { users: [] }) { this.db = db; }

  /**
   * @param {string} url
   * @returns {object}
   */
  get(url) {
    let response = {};
    let parts = new URL(`http://localhost${url}`);
    if (parts.pathname == '/users') {
      let users = parts.searchParams.get('users')?.split(',');
      response = {
        users: (this.db?.users ?? []).filter((user) => users === null || users.includes(user.name))
          .sort((a, b) => (a.name < b.name) ? -1 : 1)
      };
    }
    return response;
  }

  /**
   * @param {string} url
   * @param {object} payload
   * @returns {object}
   */
  post(url, payload) {
    let response = {};
    if (url == '/add') {
      response = { name: payload.user, owes: {}, owed_by: {}, balance: 0 };
      this.db.users.push(response);
    } else if (url == '/iou') {
      for (let user of this.db.users) {
        if (user.name == payload.lender) { this._update(user, payload.borrower, payload.amount); }
        else if (user.name == payload.borrower) { this._update(user, payload.lender, -payload.amount); }
      }

      response = { users: [payload.lender, payload.borrower].sort().map((name) => this.db.users.find((u) => name == u.name)) };
    }

    return response;
  }

  /**
   * @param {object} user
   * @param {string} name
   * @param {number} amount
   */
  _update(user, name, amount) {
    user.balance += amount;
    let diff = (user.owed_by?.[name] ?? 0) - (user.owes?.[name] ?? 0) + amount;
    delete user.owed_by[name];
    delete user.owes[name];
    if (diff > 0) { user.owed_by[name] = diff; }
    else if (diff < 0) { user.owes[name] = -diff; }
  }
}
