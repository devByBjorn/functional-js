// ARRAY OF FUNCTION 
const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;
const twoDecimals = x => parseFloat(x.toFixed(2));

/* we can place whatever function we like in here, our own functions or functions 
  from other libraries
*/

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt,
  twoDecimals,
];

// CODE BELOW IS NOT STRICTLY FUNCTIONAL!!

var number = 42;
functionsArray.forEach(func => number = func(number));
console.log(number);


/*
javascript.info
Rounding
One of the most used operations when working with numbers is rounding.

There are several built-in functions for rounding:

Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/