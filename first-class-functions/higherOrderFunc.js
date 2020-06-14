// Checks for logic and preformce the calculation 
// NOT following the The Single Responsebility Principle
// const devide = (x, y) => {
//   if(y === 0) {
//     console.log('Error: deviding by zero');
//     return null;
//   }
//   return x / y
// }

// Refactored to only performe the calculation
const devide = (x, y) => x / y

// Higher order function checking the logic and -
// takes a function as argument
// returns the functtion if logic is correct
const secondArgumentIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: deviding by zero');
      return null
    }
    return func(...args)
  }

const devideSafe = secondArgumentIsntZero(devide)
console.log(devideSafe(7, 0))
console.log(devideSafe(7, 3))

// FUNCTIONAL JS