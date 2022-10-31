/*You must execute this lib with Deno. This is a DenoCLI program*/
import {
  italic,
  bgRgb8,
  rgb8
} from 'https://deno.land/std@0.160.0/fmt/colors.ts'

// deno-lint-ignore ban-types
type cb = Function
type vd = number | string | void | (number | string | undefined)[] | null
type arr = (string | number | undefined)[] | string | number

let [_m1, _m2, _cb, _np, _args] = ['', '', (() => {}) as cb, 0, Deno.args]

const cliImplement = (
  welcomeMessage: string,
  promptMessage: string,
  callback: cb
) => {
  const numberOfParams = defParamsCatcher(callback)?.length || 0
  const numberOfArgs = _args.length
  _m1 = welcomeMessage
  _m2 = promptMessage
  _cb = callback
  _np = numberOfParams
  if (numberOfArgs === 0) cliUserPrompt(_m1, _m2, _cb, numberOfParams)
  else if (numberOfArgs > 0) cliArgsBehavior()
  else return console.error('Something went wrong')
}

const defParamsCatcher = (fn: cb) => {
  if (typeof fn === 'function') {
    let fnString = fn.toString()
    const isArrow = fnString.includes('=>')
    isArrow && (fnString = fnString.substring(0, fnString.indexOf('=>')))
    const fnParams = fnString.slice(
      fnString.indexOf('(') + 1,
      fnString.indexOf(')')
    )
    if (fnParams.length > 0) {
      return fnParams.split(',')
    } else {
      return ['']
    }
  } else {
    throw new Error('Invalid function')
  }
}

const cliUserPrompt = (
  welcomeMessage: string,
  promptMessage: string,
  callback: cb,
  np: number
) => {
  alert(
    'Welcome to utils, remember that you can exit any time with Ctrl + C or Command + C.'
  )
  const p: string | null = prompt(welcomeMessage)
  const validData = _inputValidator(typeof p === 'string' ? p.trim() : null)
  if (!validData) userError(p)
  else if (typeof validData === 'object' && validData.length !== np) {
    numbArgsChecker(p, validData)
  } else if (validData && typeof validData === 'number') {
    console.log(promptMessage, callback(validData))
    return shouldProceed()
  } else if (typeof validData === 'object' && validData.length === np) {
    console.log(promptMessage, callback(...validData.flat()))
    return shouldProceed()
  }
}

const cliArgsBehavior = () => {
  const validData: vd = _inputValidator(_args)
  if (!validData) {
    numbArgsChecker(_args.toString(), _args)
  } else if (typeof validData === 'number') {
    console.log(_m2, _cb(validData))
    return shouldProceed()
  } else if (typeof validData === 'object' && validData.length !== _np) {
    numbArgsChecker(validData.toString(), _args)
  } else if (typeof validData === 'object' && validData.length === _np) {
    console.log(_m2, _cb(...validData.flat()))
    return shouldProceed()
  }
}

const _inputValidator = (p: arr | null) => {
  if (p === null) return userError(p)
  else if (typeof p === 'string' && p.split(' ').length <= 1)
    return numbArrErrors([p.split(' ')].flat())
  else if (
    typeof p === 'object' ||
    (typeof p === 'string' && p.split(' ').length > 1)
  ) {
    const param = typeof p === 'object' ? [p].flat() : p.split(' ')
    const filterParams = param.filter(p => p !== '')
    const arrayParams = filterParams.map(Number)
    if (arrayParams.includes(NaN))
      return numbArrErrors(filterParams, arrayParams)
    else return numbArrErrors(filterParams, arrayParams)
  } else return cliImplement(_m1, _m2, _cb)
}

const shouldProceed = () => {
  const shouldProceed = confirm(italic(rgb8(`Do you want to try again?`, 10)))
  if (shouldProceed) {
    _args = []
    cliImplement(_m1, _m2, _cb)
  } else return Deno.exit(0)
}

const userError = (p: vd, errorMessage = `Invalid ${String(p)}`) => {
  alert('Invalid input')
  p == null
    ? alert(bgRgb8(rgb8(`Empty input`, 232), 15))
    : console.error('\n' + bgRgb8(rgb8(errorMessage, 255), 52) + '\n')
  return shouldProceed()
}

const numbArrErrors = (
  filter: (string | number | undefined)[],
  raw: number[] = [filter].flat().map(Number)
) => {
  const numbArr = [filter].flat().map((item, index) => {
    if (isNaN(raw[index])) {
      const numb = String(item)
      const numbT =
        (numb.includes('"') || numb.includes("'") || numb.includes('`')) &&
        numb.replace(/['"`]/g, '').trim()
      return numbT ? Number(numbT) : userError(item)
    } else return Number(String(item))
  }) as number[]
  const intCB = (x: string | number | undefined) => {
    if (
      (typeof x === 'string' && x.includes('.')) ||
      (typeof x === 'number' && x !== parseInt(x.toString()))
    )
      return userError(
        x,
        `Invalid number ${x}, make sure that the number is an integer.`
      )
    else return parseInt(x!.toString())
  }
  return numbArr.map(intCB)
}

const numbArgsChecker = (p: string | null, data: vd) => {
  const dataArray = typeof data === 'object' ? [data].flat() : null
  const errorMessage = p?.replace(/,/g, ' ')
  if (dataArray == null) userError(p)
  else if (dataArray.length > _np)
    userError(
      p,
      `Too many arguments in '${errorMessage}'. You added ${dataArray.length} parameter(s), but only ${_np} was expected.`
    )
  else if (dataArray.length < _np)
    userError(
      p,
      `You have few arguments in '${errorMessage}'. You added ${dataArray.length} parameter(s), but only ${_np} was expected.`
    )
  else return userError(p)
}

export default cliImplement
