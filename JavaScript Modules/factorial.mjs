// Recursion in JavaScript module

const factorial = (n) => {
  if (!(n >= 0 && parseInt(n) === n))
    throw new Error("Must be a positive integer number");
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

export default factorial;

console.log(factorial(12));
