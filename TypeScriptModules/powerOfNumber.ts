import launchConsole from './utils/utils.ts'
export const power = (x: number, n: number): number => {
  if (n === 0) return 1
  else if (n === 1) return x
  else return x * power(x, n - 1)
}

launchConsole(
  'This module returns the power of a given number.\nPlease enter a number and a positive integer separated by a space: ',
  'The power is ',
  power
)
export default power
