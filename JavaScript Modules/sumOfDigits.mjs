import { intValidator, promptConsole } from "./utils/utils.mjs";

const sumOfDigits = (n) => {
  if (n < 10) return n;
  else if (n < 100) return Math.floor(n / 10) + (n % 10);
  else return sumOfDigits(Math.floor(n / 10)) + (n % 10);
};

promptConsole.question(
  `This module returns the sum of digits of a given positive integer.\nPlease enter a positive integer: `,
  (n) => {
    const { error } = intValidator(n);
    error == null
      ? console.log(`The sum of the digits is ${sumOfDigits(n)}`)
      : console.log(error);
    promptConsole.close();
  }
);

export default sumOfDigits;
