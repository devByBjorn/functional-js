// Takes an array of values and turns it into one value; a sum, an avarage, etc. 
// Starts with an inital value and modifies this value in some way for each item/value in the array.
// Takes a function as an argument 
// Always takes to arguments, unlike our other inbuilt HOCs that works with one argument
// The first argument is our accumulator
// The scond value is the current element being processed, much llike the element in the map function. 
// Except for the function argument, we must remember to give the reduce function an starting value 
// So when we call the reduce function the first time the acc will be the starting value and -
// the element will be the first item in the array, 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce((acc, num) => {
  console.log(`acc is ${acc}`)
  console.log('------')
  console.log(`num is ${num}`)

  return acc + num
}, 0)

console.log(`sum is ${sum}`)

// When using multiplication, like calculating the product of numbers, the starting value needs to be 1 or more -
// If starting with 0 the acc will be 0 since x * 0 always equals 0
// Try changing the starting value from 1 to 0 to see what happens
const product = numbers.reduce((acc, num) => {
  console.log(`acc is ${acc}`)
  console.log('------')
  console.log(`num is ${num}`)

  return acc * num
}, 1);