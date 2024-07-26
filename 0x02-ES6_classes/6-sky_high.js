// SkyHighBuilding.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding._validateNumber(floors, 'Floors');
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["evacuationWarningMessage"] }] */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  // Validate Number
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }
}
