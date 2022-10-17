import { intValidator, promptConsole } from "./utils/utils.mjs";

const factorial = (n) => {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

promptConsole.question(
  `This module returns the factorial number of a given positive integer.\nPlease enter a positive integer: `,
  (n) => {
    const { error } = intValidator(n);
    error == null
      ? console.log(`The result is ${factorial(n)}`)
      : console.log(error);
    promptConsole.close();
  }
);

export default factorial;
