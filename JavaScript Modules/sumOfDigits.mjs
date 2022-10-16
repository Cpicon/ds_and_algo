/*1. How to find the sum of digits of a positive integer using recursion?
Step 1: Recursive case - the flow
    10 10/10 = 1 and Remainder = 0
    54 54/10 = 5 and Remainder = 4
A function like the above must help with this exercise.
function sumOfDigits(n) {
  switch (true) {
    case !Number.isInteger(n) || n < 0:
      throw new Error("Invalid number, must be a positive integer");
    case n < 10:
      return n;
    case n < 100:
      return Math.floor(n / 10) + (n % 10);
    default:
      return sumOfDigits(Math.floor(n / 10)) + (n % 10);
  }
}
*/

// Recursion in JavaScript module

const sumOfDigits = (n) => {
  if (!Number.isInteger(n) || n < 0)
    throw new Error("Invalid number, must be a positive integer");
  if (n < 10) return n;
  if (n < 100) return Math.floor(n / 10) + (n % 10);
  else return sumOfDigits(Math.floor(n / 10)) + (n % 10);
};

console.log(sumOfDigits(9999));

export default sumOfDigits;
