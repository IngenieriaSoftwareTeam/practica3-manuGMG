class Calculator {
  constructor() { }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    /* TODO*/
  }

  multiply(a, b) {
    /* TODO*/
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Divisor cannot be zero');
    }
    return a / b;
  }

  squareRoot(num) {
    /* TODO*/
  }
}

export default Calculator;
