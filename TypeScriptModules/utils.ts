type callbackAlgorithm = (a: number, b: number) => number

const errorCLI = (p: string) => {
  alert('Invalid input')
  const errorMessage = `Invalid ${p}`
  const shouldProceed = confirm('Do you want to try again?')
  console.log(errorMessage, shouldProceed)
  return NaN
}
const inputValidator = (p: string | null): number | number[] => {
  if (p === null) {
    return NaN
  } else if (!p.includes(' ') || p.split(' ').length === 1) {
    return parseInt(p)
  } else if (p.split(' ').length > 1) {
    const param: string[] = p.split(' ')
    // deno-lint-ignore no-explicit-any
    const arrayParams: any[] = param!.map((x: string) => {
      const number = parseInt(x)
      if (isNaN(number)) errorCLI(p)
      else return number
    })
    return arrayParams
  } else return errorCLI(p)
}

const defaultBehavior = (
  messageInitial: string,
  promptMessage: string,
  callbackAlgorithm: callbackAlgorithm,
  numberOfParams: number
) => {
  const initialCLI = (): number[] => {
    alert(`Hello from utils`)
    const p: string | null = prompt(messageInitial, 'Z(+) Z(+)')
    const arrayValid: number | number[] = inputValidator(p)
    const isNumber = (a: number | number[]) => {
      if (typeof a === 'number') {
        if (isNaN(a)) return false
        else return arrayValid
      } else return false
    }
    const arrayToCallback: number[] = [arrayValid].flat()

    if (isNumber(arrayValid)) initialCLI()
    else if (arrayToCallback.indexOf(NaN) !== -1) {
      return initialCLI()
    }
    return arrayToCallback
  }
  try {
    const promptToEv = initialCLI()
    if (promptToEv.length === numberOfParams) {
      alert(
        `${promptMessage} ${callbackAlgorithm(promptToEv[0], promptToEv[1])}`
      )
      Deno.exit(0)
    }
    initialCLI()
  } catch (e) {
    console.log(e)
  }
}

const launchConsole = (
  messageInitial: string,
  promptMessage: string,
  callbackAlgorithm: callbackAlgorithm,
  numberOfParams: number
) => {
  defaultBehavior(
    messageInitial,
    promptMessage,
    callbackAlgorithm,
    numberOfParams
  )
}
export default launchConsole
