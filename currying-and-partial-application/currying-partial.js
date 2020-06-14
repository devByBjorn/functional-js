// partial , when one or two arguments are static, the functoins makes for a godd candidate for partial

const add = (x, y, z) => x + y + z

const addOnePartial = (x) =>
  (y, z) => add(x, y, z)

const add5 = addOnePartial(5)
const sum1 = add5(6, 7)


const addTwoPartial = (x, y) =>
  z => add(x, y, z)

const add5and6 = addTwoPartial(5, 6)
const sum2 = add5and6(7)

//CURRYING 
// https://javascript.info/currying-partials

const curry = x =>
  y =>
    z => add(x, y, z)

const addVin = curry('Vin')
const addVinda = addVin('da')
const addVindaLoo = addVinda('loo')
console.log('addVindaloo: ' + addVindaloo) // 'Vindaloo'

// Code format below gives us the same result as addVindaloo
const getVindaloo = curry('Vin')('da')('loo')
console.log('getVindaloo ' + getVindaloo)


