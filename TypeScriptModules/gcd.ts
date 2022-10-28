import launchConsole from './utils.ts'
export const gcd = (a: number, b: number): number => {
  if (b === 0) return a
  return gcd(b, a % b)
}

launchConsole(
  'Please enter two positive integers separated by a space: ',
  'The greatest common divisor is ',
  gcd,
  2
)
export default gcd
