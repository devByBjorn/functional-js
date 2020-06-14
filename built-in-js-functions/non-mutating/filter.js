// Get onlu even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const isEven = x => x % 2 === 0
//console.log(numbers.filter(isEven))
const evenNumbers = numbers.filter(x => x % 2 === 0)
//console.log(evenNumbers)

// Get all the leap years
const years = [1999, 2000, 2001, 2004, 2006, 2008, 2018, 2019, 2020,]

const isLeapYear = x => x % 4 === 0
//console.log(years.filter(isLeapYear))



// const printFizzBuzz = (numbers) =>
//   numbers.filter(num => {
//     const shouldFizzBuzz = num => num % 5 === 0 && num % 3 === 0
//     const shouldFizz = num => !shouldFizzBuzz(num) && num % 3 === 0
//     const shouldBuzz = num => !shouldFizzBuzz(num) && num % 5 === 0

//     if (shouldFizz(num)) {
//       console.log(`${num} Fizz`)
//     } else if (shouldBuzz(num)) {
//       console.log(`${num} Buzz`)
//     } else if (shouldFizzBuzz(num)) {
//       console.log(`${num} FizzBuzz`)
//     }
//   })

// printFizzBuzz(numbers)

const words = [
  'hello',
  'goodbye',
  'the',
  'Anatartica',
];

const isLongerThan5 = word => word.length > 5
const longWords = words.filter(isLongerThan5)

// Higher order function 
const createLengthTest = minLength =>
  word => word.length > minLength;

const isLongerThan6 = createLengthTest(6)
const longWordsInArr = words.filter(isLongerThan6)

// Refactor - remove middle step of isLongerThan6
const longWordsRefactored = words.filter(createLengthTest(5))
//console.log(longWordsRefactored)

const shouldFizzBuzz = num => num % 5 === 0 && num % 3 === 0
const shouldFizz = num => !shouldFizzBuzz(num) && num % 3 === 0
const shouldBuzz = num => !shouldFizzBuzz(num) && num % 5 === 0

const printFizzBuzz = (numbers) => {
  numbers.filter(num => {
    if (shouldFizzBuzz(num)) {
      console.log(`${num}: FizzBuzz`)
    } else if (shouldFizz(num)) {
      console.log(`${num} Fizz`)
    } else if (shouldBuzz(num)) {
      console.log(`${num} Buzz`)
    }
  })
}

printFizzBuzz(numbers)

// const arr = [
//   shouldFizzBuzz,
//   shouldFizz,
//   shouldBuzz,
// ]

// const check = (numbers) => arr.map(func => numbers.filter(num => func(num)))
// console.log(check(numbers))

