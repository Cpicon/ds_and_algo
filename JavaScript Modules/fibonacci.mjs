import launchConsole from './utils/utils.mjs'

const fibonacci = (n) => {
  if (n in [0, 1]) return n
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

launchConsole(
  'This module returns the fibonacci number of a given positive integer.\nPlease enter a positive integer: ',
  'The fibonacci number is',
  fibonacci
)

export default fibonacci
