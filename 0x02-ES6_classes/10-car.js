// Car.js
const CarCloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = Car._validateString(brand, 'Brand');
    this._motor = Car._validateString(motor, 'Motor');
    this._color = Car._validateString(color, 'Color');
  }

  // Validate String
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const Clone = this[CarCloneSymbol] || this.constructor;
    return new Clone(this._brand, this._motor, this._color);
  }

  // Static method to access the clone symbol
  static get CloneSymbol() {
    return CarCloneSymbol;
  }
}
