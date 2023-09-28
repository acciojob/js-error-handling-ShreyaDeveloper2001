//your code here
class OutOfRangeError extends Error {
  constructor() {
    super('Expression should only consist of integers and +-/* characters');
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = 'InvalidExprError';
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\/\*\+][\+\-\/\*]/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\/\*]/.test(expression)) {
      throw new SyntaxError('Expression should not start with invalid operator');
    }

    if (/[\+\/\*\-]$/.test(expression)) {
      throw new SyntaxError('Expression should not end with invalid operator');
    }

    // Your code for evaluating the expression goes here

    return eval(expression); // Using eval for simplicity, but be cautious with it in a real application
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

// Example usage:
try {
  const result = evalString("5 + 3 * 2");
  console.log('Result:', result);
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error('An unexpected error occurred');
  }
}
