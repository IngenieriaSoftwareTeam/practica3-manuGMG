/* eslint-disable max-len */
import Calculator from '../src/calculator';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

const calculator = new Calculator();

describe('Calculator', () => {
  describe('add', () => {
    test('should return the sum of two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should return the sum of a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('should return the sum of two negative numbers', () => {
      expect(calculator.add(-1, -1)).toBe(-2);
    });

    test('debe tirar un error si los valores son no numericos', () => {
      expect(() => calculator.add(NaN, 3)).toThrow();
      expect(() => calculator.add(3, NaN)).toThrow();
    });

    test('debe tirar un error si los valores son null', () => {
      expect(() => calculator.add(null, 3)).toThrow();
      expect(() => calculator.add(3, null)).toThrow();
    });
  });

  describe('subtract', () => {
    test('should return the difference between two positive numbers', () => {
      expect(calculator.subtract(2, 3)).toBe(-1);
    });

    test('should return the difference between a positive and a negative number', () => {
      expect(calculator.subtract(2, -1)).toBe(3);
    });

    test('should return the difference between two negative numbers', () => {
      expect(calculator.subtract(-2, -2)).toBe(0);
    });

    test('debe tirar un error si los valores son no numericos', () => {
      expect(() => calculator.subtract(NaN, 3)).toThrow();
      expect(() => calculator.subtract(3, NaN)).toThrow();
    });

    test('debe tirar un error si los valores son null', () => {
      expect(() => calculator.subtract(null, 3)).toThrow();
      expect(() => calculator.subtract(3, null)).toThrow();
    });
  });

  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      expect(calculator.multiply(1, 1)).toBe(1);
    });

    test('should return the product of a positive and a negative number', () => {
      expect(calculator.multiply(1, -1)).toBe(-1);
    });

    test('should return the product of two negative numbers', () => {
      expect(calculator.multiply(-1, -1)).toBe(1);
    });

    test('debe tirar un error si los valores son no numericos', () => {
      expect(() => calculator.multiply(NaN, 3)).toThrow();
      expect(() => calculator.multiply(3, NaN)).toThrow();
    });

    test('debe tirar un error si los valores son null', () => {
      expect(() => calculator.multiply(null, 3)).toThrow();
      expect(() => calculator.multiply(3, null)).toThrow();
    });
  });

  describe('divide', () => {
    test('should return the division of two positive numbers', () => {
      expect(calculator.divide(24, 4)).toEqual(6);
    });
    test('should return the division of a positive number by a negative number', () => {
      expect(calculator.divide(12, -2)).toEqual(-6);
    });
    test('division by zero throws an error', () => {
      expect(() => calculator.divide(2, 0)).toThrow();
    });

    test('debe tirar un error si los valores son no numericos', () => {
      expect(() => calculator.divide(NaN, 3)).toThrow();
      expect(() => calculator.divide(3, NaN)).toThrow();
    });

    test('debe tirar un error si los valores no son null', () => {
      expect(() => calculator.divide(null, 3)).toThrow();
      expect(() => calculator.divide(3, null)).toThrow();
    });
  });

  describe('squareRoot(num)', () => {
    test('square root of a positive number', () => {
      expect(calculator.squareRoot(25)).toEqual(5);
    });
    test('square root of a negative number throws an error', () => {
      expect(() => calculator.squareRoot(-25)).toThrow('Raiz no puede ser un numero negativo');
    });

    test('debe tirar un error si el valor es no numerico', () => {
      expect(() => calculator.squareRoot(NaN)).toThrow();
    });

    test('debe tirar un error el valor es null', () => {
      expect(() => calculator.squareRoot(null)).toThrow();
    });
  });
});

