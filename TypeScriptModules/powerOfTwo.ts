import launchConsole from './utils/utils.ts'
const powerOfTwo = (x: number): number => {
  if (x === 0) return 1
  else return 2 * powerOfTwo(x - 1)
}

launchConsole(
  'Please enter a positive integer to calculate the power of two: ',
  'The power of two is ',
  powerOfTwo
)
