import R from 'ramda'

const names = [
  'Bjorn', 'Anna', 'Bjorn', 'Bjorn', 'Anna', 'BJorN', 'Anna',
  'Bjorn', 'Bjorn', 'Erik', 'Bjorn', 'Erik', 'AnNa', 'Bjorn',
  'Erik', 'Matilda', 'Matilda', 'ERik', 'MaTIlda', 'Bjorn']

export const capitalize = string => {
  string = string.toLowerCase()
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
}

export const listItemsCount = (capitalize, array) =>
  array.reduce((acc, name) => {
    name = capitalize(name)
    const count = acc[name] || 0

    return {
      ...acc,
      [name]: count + 1
    }
  }, {})

//console.log(listItemsCount(capitalize, names))

// partial application without Ramda
export const applyPartial = (listItemsCount, capitalize) =>
  names => listItemsCount(capitalize, names)

console.log(applyPartial.length)

export const countWithCapitlizePartial = applyPartial(listItemsCount, capitalize)
const countNamesPartialWay = countWithCapitlizePartial(names)
//console.log(countNamesPartialWay, 'The partial way without Ramda:')

// partial application with Ramda
const listItemsCountCurried = R.curry(listItemsCount)
export const countWithCapitlizedPartialRamda = listItemsCountCurried(capitalize)
const countAllNames = countWithCapitlizedPartialRamda(names)
// console.log(countAllNames, 'The partial way with Ramda:')

