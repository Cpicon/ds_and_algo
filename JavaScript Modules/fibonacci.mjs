// Recursion in JavaScript module

const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Parameter must be a positive integer number");
  } else if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log(fibonacci(6.3));
export default fibonacci;
