import launchConsole from './utils/utils.mjs'

const toBits = (a) => {
  if (a in [0, 1]) return 'a'
  else return toBits(Math.floor(a / 2)) + String(a % 2)
}
launchConsole(
  ' This module returns the binary representation of a given positive integer.\nPlease enter a positive integer: ',
  'The binary representation is ',
  toBits
)
