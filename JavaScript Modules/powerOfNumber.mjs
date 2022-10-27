import launchConsole from './utils/utils.mjs'
const power = (x, n) => {
  if (n === 0) return 1
  else if (n === 1) return x
  else return x * power(x, n - 1)
}
console.log(power(3, 3))
launchConsole(
  'This module returns the power of a given number.\nPlease enter a number and a positive integer separated by a space: ',
  'The power is ',
  power
)

// console.log(gcd(7, 5))

// const toBits = (a) => {
//   if (a === 0) return '0'
//   if (a === 1) return '1'
//   else return toBits(Math.floor(a / 2)) + String(a % 2)
// }
// launchConsole(
//   ' This module returns the binary representation of a given positive integer.\nPlease enter a positive integer: ',
//   'The binary representation is ',
//   toBits
// )
// console.log(toBits(23))
// console.log(process.argv.slice(2))
