// When we want to sort an array.
// Mutates the array. 
// Takes a comparitive function as argument. 
// We always use sort with slice 


const mixedNumbers = [1, 8, 5, 3, 7, 9, 22, 54, 23, 7, 6, 1, 5];
const mixedCharacters = ['b', 'a', 'c', 'e', 'd', 'h', 'g', 'f'];

//comparative function ascending order
const ascending = (a, b) => {
  if (a < b) return - 1;
  if (a > b) return 1;
  return 0;
};

const sortedNumbers = mixedNumbers.slice().sort(ascending); // slice first then sort
//console.log(sortedNumbers)

// comparative function decending order
const decending = (a, b) => {
  if (a > b) return - 1;
  if (a < b) return 1;
  return 0;
}

const sortAsWished = (order, array) =>
  array.slice().sort(order);

console.log(sortAsWished(decending, mixedNumbers));
console.log(sortAsWished(ascending, mixedCharacters)); // works with string values too
console.log(mixedNumbers); // intact
console.log(mixedCharacters); // intact

/* In functional programming we do not really care how the sort algorithm behind the function works. We
  only care about what it does. Also, brower will implement the sort algorith differently depending on
  what suits them.
*/