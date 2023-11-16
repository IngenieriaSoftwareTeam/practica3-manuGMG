class Calculator {
  constructor() { }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Divisor cannot be zero');
    }
    return a / b;
  }

  squareRoot(num) {
    if (num < 0) {
      throw new Error('Raiz no puede ser un numero negativo');
    }
    return Math.sqrt(num);
  }
}

export default Calculator;
