import R from 'ramda'

const names = [
  'Bjorn', 'Anna', 'Bjorn', 'Bjorn', 'Anna', 'BJorN', 'Anna',
  'Bjorn', 'Bjorn', 'Erik', 'Bjorn', 'Erik', 'AnNa', 'Bjorn',
  'Erik', 'Matilda', 'Matilda', 'ERik', 'MaTIlda', 'Bjorn']

const capitalize = string => {
  string = string.toLowerCase()
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
}

const listItemsCount = (capitalize, array) =>
  array.reduce((acc, name) => {
    name = capitalize(name)
    const count = acc[name] || 0

    return {
      ...acc,
      [name]: count + 1
    }
  }, {})

// console.log(listItemsCount(capitalize, names))

// partial applicatio without Ramda
const applyPartial = (listItemsCount, capitalize) =>
  names => listItemsCount(capitalize, names)

const countWithCapitlizePartial = applyPartial(listItemsCount, capitalize)
const countNamesPartialWay = countWithCapitlizePartial(names)
console.log('The partial way without Ramda:', countNamesPartialWay)

// partial application with Ramda
const listItemsCountCurried = R.curry(listItemsCount)
const countWithCapitlizedAsPartial = listItemsCountCurried(capitalize)
const countAllNames = countWithCapitlizedAsPartial(names)
console.log('The partial way with Ramda:', countAllNames)
