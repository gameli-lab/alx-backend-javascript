// Airport.test.js
import Airport from './Airport';

describe('Airport', () => {
  it('should initialize with the correct attributes', () => {
    const airport = new Airport('John F. Kennedy International Airport', 'JFK');
    expect(airport.name).toBe('John F. Kennedy International Airport');
    expect(airport.code).toBe('JFK');
  });

  it('should throw error for invalid name type', () => {
    expect(() => new Airport(123, 'JFK')).toThrow(TypeError);
  });

  it('should throw error for invalid code type', () => {
    expect(() => new Airport('John F. Kennedy International Airport', 123)).toThrow(TypeError);
  });

  it('should return the airport code as string', () => {
    const airport = new Airport('John F. Kennedy International Airport', 'JFK');
    expect(airport.toString()).toBe('JFK');
  });
});

