// Recursion in JavaScript module

const factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Must be a positive integer number");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(11));
export default factorial;
