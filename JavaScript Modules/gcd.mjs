import launchConsole from './utils/utils.mjs'
export const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

launchConsole(
  'Please enter two positive integers separated by a space: ',
  'The greatest common divisor is ',
  gcd
)
export default gcd
