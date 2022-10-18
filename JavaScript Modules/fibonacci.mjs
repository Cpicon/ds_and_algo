import { intValidator, promptConsole } from './utils/utils.mjs'

const fibonacci = (n) => {
  if (n in [0, 1]) return n
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

promptConsole.question(
  'This module returns the fibonacci number of a given positive integer.' +
    '\nPlease enter a positive integer: ',
  (n) => {
    const { error } = intValidator(n)
    error == null
      ? console.log(
          `The fibonacci number in the ${n} position is ${fibonacci(n)}`
        )
      : console.log(error)
    promptConsole.close()
  }
)

export default fibonacci
