const numbers = [1, 2, 3, 4, 5];

// The Non Func Way
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}
//console.log(doubleNumbers);

// The Func Way
const double = x => x * 2;
const doubleNumbersFunc = numbers.map(double);

console.log(doubleNumbersFunc);