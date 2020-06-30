import {
  capitilize,
  checkStringLength,
  checkExactStringLength,
  getErrorMessages,
} from '../../challanges/errorMessages'

test('should capitlize first letter of string', () => {
  const string = 'hello'
  const actual = capitilize(string)
  expect(actual).toBe('Hello')
})

test('should check if lenth of string is same or above given critera and return error if not else empty string', () => {
  const input = { firstName: '', lastName: 'Carell' }

  const actual1 = checkStringLength(input.firstName, 'first name', 2)
  expect(actual1).toBe('First name must be at least 2 characters')

  const actual2 = checkStringLength(input.lastName, 'last name', 2)
  expect(actual2).toBe('')
})

test('test should check if length of string matches the critera exact and return error if not else empty string', () => {
  const input = { zipCode: '1234', state: 'LA' }
  const { zipCode, state } = input

  const actual1 = checkExactStringLength(zipCode, 'zip code', 5)
  expect(actual1).toBe('Zip code must be 5 characters')

  const actual2 = checkExactStringLength(state, 'state', 2)
  expect(actual2).toBe('')
})

test('should return array of error messages for inputs that do not meet their criteria', () => {
  const inputValues = {
    firstName: 'Björn',
    lastName: 'C',
    zipCode: '12345',
    state: 'LAX'
  }

  const inputCriterias = {
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

  const actual = getErrorMessages(inputValues, inputCriterias)
  expect(actual).toEqual([
    'Last name must be at least 2 characters',
    'State must be 2 characters'
  ])

})