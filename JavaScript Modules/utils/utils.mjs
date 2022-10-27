import * as rl from 'node:readline'

// The first export is a validator, for be sure that the input is a positive integer value.

export const intValidator = (n, args) => {
  const arrayInput = n
  if (args.length !== n.length) {
    return {
      error: `Please enter ${args.length} positive integer(s) separated by a space`
    }
  } else {
    const ai = arrayInput.map((item) => {
      const number = Number(item)
      if (!item) {
        return console.error('Empty prompt, enter a positive integer')
      } else if (isNaN(number)) {
        return {
          error: `Invalid input. "${item}" is not a valid number, try again`
        }
      } else if (!(number > 0 && parseInt(number) === number)) {
        return { error: `Number ${item} is not a positive integer, try again` }
      } else return number
    })
    return ai
  }
}

/* Function that stringifies a callback function.
  Then, look for the indexes for the first start parenthesis and the first closing parenthesis.
  Then, slice the string from the first start parenthesis to the first closing parenthesis.
  Finally, split the string by comma and return the array of strings.
  Example, f((a,b)=> null): 1."(a,b)=> null"
                            2. index "(" == 0; index ")" == 4
                            3. slice index = "a,b"
                            4. split "," = [a,b] or if is only one parm = a  */

const asStringify = (cb) => {
  const cbString = cb.toString()
  //  const emptyParenthesis = cbString.charAt(cbString.indexOf('(') + 1) === ')'

  const arrayProperties = (data) => {
    const [start, end] = [data.indexOf('(') + 1, data.indexOf(')')]
    const argsSt = data
      .slice(start, end)
      ?.split(',')
      .map((arg) => arg.trim())
    return argsSt
  }

  if (cbString.includes('=>')) {
    const init = cbString.slice(0, cbString.indexOf('=>'))
    if (init.includes('()')) return arrayProperties('a')
    else if (!(init.includes('(') || init.includes(')'))) {
      return arrayProperties(`'(${init})'`)
    } else return arrayProperties(init.trim())
  } else if (cbString.includes('function')) {
    const init = cbString.slice(0, cbString.indexOf(')' + 1))
    if (init.includes('()')) return arrayProperties('a')
    else if (!(init.includes('(') || init.includes(')'))) {
      return arrayProperties(`'(${init})'`)
    } else return arrayProperties(init.trim())
  }
}

/*
 This function tries to resolve the problem of the arguments passed to the callback function, when the callback function has more than one argument.
 */

const multipleArgsBehavior = (n, defArgs, answerMessage, callbackAlgorithm) => {
  if (process.argv.length > n + 2) {
    console.error(`Too many arguments, please enter only ${n} positive integer`)
  } else if (process.argv.length < n + 2) {
    console.error(
      `Too few arguments, please enter ${n} positive integer separated by a space`
    )
  } else if (process.argv.length === n + 2 && n > 1) {
    const args = process.argv.slice(2)
    const arrayEvaluated = intValidator([...args], defArgs)
    const errors = arrayEvaluated.filter((item) => item.error)
    if (errors.length > 0) {
      return errors.forEach(({ error }) => {
        console.error(error)
      })
    } else if (errors.length === 0) {
      console.log(`${answerMessage} ${callbackAlgorithm(...args)}`)
    }
  }
}

/* This function execute the callback function with one argument, which passed in the command line For more arguments, it will the function argsBehavior will executed.
 */

const defaultBehavior = (
  n = 1,
  defArgs,
  answerMessage,
  questionMessage,
  callbackAlgorithm
) => {
  if (n > 1 || !(process.argv.length === n + 2)) {
    multipleArgsBehavior(n, defArgs, answerMessage, callbackAlgorithm)
  } else if (process.argv.length === 2) {
    const reader = rl.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    const questionCallback = (n) => {
      const params = n.split(' ')
      if (params.length !== defArgs.length) {
        reader.close()
        return console.log(
          `Invalid input.\nTry again with ${defArgs.length} positive integer separated by a space`
        )
      }
      const arrayEvaluated = [...intValidator([...params], defArgs)]
      const errors = arrayEvaluated.filter((item) => item.error)

      if (errors.length > 0) {
        errors.forEach(({ error }) => {
          console.error(error)
        })
        reader.close()
      } else if (errors.length === 0) {
        console.log(`${answerMessage} ${callbackAlgorithm(...params)}`)
      }
      reader.close()
    }
    return reader.question(questionMessage, questionCallback)
  } else if (process.argv.length === n + 2) {
    const cliParam = process.argv.slice(2)[0]
    const cliEvaluated = intValidator([cliParam], [0])
    if (cliEvaluated[0].error) {
      console.error(cliEvaluated[0].error)
    } else {
      console.log(
        `${answerMessage} ${callbackAlgorithm(process.argv.slice(2)[0])}`
      )
    }
  }
}

// The second export (the default export) is a function that takes three arguments: a string, a  second string and a function. The first string is the message to prompt the user for input, the second string is the message to show the result of the function and the third argument is the function to execute in a CLI when .question() method is called.

export const launchConsole = (
  questionMessage,
  answerMessage,
  callbackAlgorithm
) => {
  const defArgs = [...asStringify(callbackAlgorithm)] || []
  defaultBehavior(
    defArgs.length,
    defArgs,
    answerMessage,
    questionMessage,
    callbackAlgorithm
  )
}

export default launchConsole
