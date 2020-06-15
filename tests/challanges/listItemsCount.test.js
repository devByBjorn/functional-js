import R from 'ramda'
import { capitalize, listItemsCount, countWithCapitlizePartial, countWithCapitlizedPartialRamda } from '../../challanges/listItemsCount'

test('capitalizes first character in string, and lower case the rest,', () => {
  const string = 'hEllO'
  expect(capitalize(string)).toBe('Hello')
})

let names

beforeEach(() => {
  names = ['Bjorn', 'AnNa', 'Bjorn', 'BJorn', 'ANNA',]
})

test('list items in array in form of object like {item: occurence}', () => {
  expect(listItemsCount(capitalize, names)).toEqual({
    Bjorn: 3,
    Anna: 2,
  })
})

test('should run applyPartial with two functions as arguments', () => {
  const applyPartial = (listItemsCount, capitalize) =>
    names => listItemsCount(capitalize, names)

  expect(applyPartial.length).toBe(2)
})

test('list items in array in form of object like {item: occurence}', () => {
  expect(countWithCapitlizePartial(names)).toEqual({
    Bjorn: 3,
    Anna: 2,
  })
})

test('list items in array in form of object like {item: occurence}', () => {
  expect(countWithCapitlizedPartialRamda(names)).toEqual({
    Bjorn: 3,
    Anna: 2,
  })
})


