import launchConsole from './utils/utils.mjs'

const factorial = (n) => {
  if (n === 0) return 1
  else return n * factorial(n - 1)
}
launchConsole(
  'This module returns the factorial number of a given positive integer.\nPlease enter a positive integer: ',
  'The factorial number is ',
  factorial
)

export default factorial
