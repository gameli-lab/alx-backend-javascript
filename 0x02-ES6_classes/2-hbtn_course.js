// HolbertonCourse.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'Name');
    this._length = HolbertonCourse._validateNumber(length, 'Length');
    this._students = HolbertonCourse._validateArray(students, 'Students');
  }

  // Validate String
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Validate Number
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Validate Array of Strings
  static _validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    if (!value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${attributeName} array must contain strings only`);
    }
    return value;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse._validateString(value, 'Name');
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._validateNumber(value, 'Length');
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._validateArray(value, 'Students');
  }
}
