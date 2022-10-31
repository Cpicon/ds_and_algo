import launchConsole from './utils/utils.ts'

const sumOfDigits = (n: number): number => {
  if (n < 10) return n
  else if (n > 10 && n < 100) return Math.floor(n / 10) + (n % 10)
  else return sumOfDigits(Math.floor(n / 10)) + (n % 10)
}

launchConsole(
  'This module returns the sum of digits of a given positive integer.\nPlease enter a positive integer: ',
  'The sum of digits is',
  sumOfDigits
)

export default sumOfDigits
