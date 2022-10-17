//A validator, for be sure that the input is a positive integer value.

export const intValidator = (n) => {
  const number = Number(n);
  if (!n) return { error: "Empty prompt, enter a positive integer" };
  else if (isNaN(number))
    return { error: `Invalid input. "${n}" is not a valid number, try again` };
  else if (!(number >= 0 && parseInt(number) === number))
    return { error: `Number ${n} is not a positive integer, try again` };
  else return number;
};

// Create a readline interface to prompt the user for input.

import * as readline from "node:readline";

export const promptConsole = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
