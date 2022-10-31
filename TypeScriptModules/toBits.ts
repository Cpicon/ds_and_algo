import launchConsole from './utils/utils.ts'

export const toBits = (a: number): string => {
  if (a in [0, 1]) return `${a}`
  else return toBits(Math.floor(a / 2)) + String(a % 2)
}
launchConsole(
  ' This module returns the binary representation of a given positive integer.\nPlease enter a positive integer: ',
  'The binary representation is ',
  toBits
)

export default toBits
