// PASS FUNCTIONS AS ARGUMENTS 
const add = (x, y) => x + y;
const subtract = (x, y) => x - 1;

const combine2and3 = func =>
  func(2, 3);

combine2and3(add) // -> 5
combine2and3(subtract) // -> -1
combine2and3(Math.max); // -> 3

// anonymous func created on the spot, can be usefull when we have a very specific funtions that is not going to be used over and over again
combine2and3((x, y) => x + y);


// FUNCTIONS RETURNING FUNCTIONS - Function factory
const createPrinter = () => () => console.log('Yo, what up bra');

const createPrinterTheOldWay = function () {
  return function () {
    console.log('Hello my dear friend');
  };
};


// ALOT OF REPETITION
// const doubleThis = x => x * 2;
// const tripleThis = x => x * 3;
// const quadrupleThis = x => x * 4;

// PERFECT CASE FOR A FIRST CLASS FUNCTION
const createMultiplies = y => x => x * y;

const doubleNumber = createMultiplies(2)
const tripleNumber = createMultiplies(3)
const quadrupleNumber = createMultiplies(4)

console.log(doubleNumber(5)) // -> 10
console.log(tripleNumber(5)) // -> 15
console.log(quadrupleNumber(5)) // -> 20

//CLOSURE
const createPrint = () => {
  const myFavoriteNum = 42;
  return () => console.log(`My favorite number is ${myFavoriteNum}`);
}

const print = createPrint();
print(); // My favorite number is 42

