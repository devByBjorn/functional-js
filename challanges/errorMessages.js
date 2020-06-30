const currentInputValues = {
  firstName: 'N',
  lastName: 'Carell',
  zipCode: '12345',
  state: 'CA',
}

export const capitilize = string =>
  string.charAt(0) === string.charAt(0).toLowerCase()
    ? string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
    : string

export const checkStringLength = (value, valueName, crietaria) => {
  const capitilizedValueName = capitilize(valueName)
  return value.length >= crietaria
    ? ''
    : `${capitilizedValueName} must be at least ${crietaria} characters`
}

export const checkExactStringLength = (value, valueName, crietaria) => {
  const capitilizedValueName = capitilize(valueName)
  return value.length === crietaria
    ? ''
    : `${capitilizedValueName} must be ${crietaria} characters`
}

export const inputCriteria = {
  firstName: [
    value => checkStringLength(value, 'first name', 2)
  ],
  lastName: [
    value => checkStringLength(value, 'last name', 2)
  ],
  zipCode: [
    value => checkExactStringLength(value, 'zip code', 5)
  ],
  state: [
    value => checkExactStringLength(value, 'state', 2)
  ],
}

export const getErrorMessages = (inputs, criteria) => {
  return Object.keys(inputs)
    .reduce((acc, fieldName) => [
      ...acc,
      ...criteria[fieldName].map(test => test(inputs[fieldName]))
    ], []).filter(message => message)
}

console.log(getErrorMessages(currentInputValues, inputCriteria))

