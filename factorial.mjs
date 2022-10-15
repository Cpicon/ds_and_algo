// Recursion in JavaScript module

const factorial = (n) => {
  if (n < 0 || isNaN(n)) {
    throw new Error("Must be a positive integer number");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const fibonacci = (n) => {
  if (n < 0 || isNaN(n)) {
    throw new Error("Must be a positive integer number");
  } else if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(factorial(10));
console.log(fibonacci(8));
