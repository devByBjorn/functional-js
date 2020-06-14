// Slice is not a Higher order function.
// Slice does not mutate the array it's called on.
// Slice, when called with no arguments,slices all valuse from beginning to end, returns a copy of the array. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.slice(); // returns a copy

/* Slice can help us turning mutating functions, pop/push/sort/reverse, into non-mutating functions.
  We do this by first calling slice() and then the mutating array
*/

console.log(numbers.slice().reverse()); // returns a reversed copy of the array
console.log(numbers); // original array is still intact