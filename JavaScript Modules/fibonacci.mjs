// Recursion in JavaScript module

const fibonacci = (n) => {
  if (!(n >= 0 && parseInt(n) === n))
    throw new Error("Parameter must be a positive integer number");
  if (n === 0 || n === 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};

export default fibonacci;

console.log(fibonacci(9));
