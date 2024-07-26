// Airport.js
export default class Airport {
  constructor(name, code) {
    this._name = Airport._validateString(name, 'Name');
    this._code = Airport._validateString(code, 'Code');
  }

  // Validate String
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override toString method to return airport code
  toString() {
    return this._code;
  }
}
