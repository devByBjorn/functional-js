// the name property of a function is the name we gave the funtion. 
// functions as properties wich in them self are functions, like the toString property, returns the functions code in string format
// length is another property that all functions has, length equals the total numbers of arguemnts


const sayHello = animal => `Hellor ${animal}`
console.log(sayHello.name) // sayHello

const add = (x, y, z) => x + y + z
console.log(add.length) // 3

// toString()
console.log(add.toString())

// call()
// the first argument in the call function lets us change the this keyword if we used it in our function
// in functional programming we rarely use the this keyword, so we pass in null as the first argument

console.log(add.call(null, 1, 2, 3))
// this would be the same as calling the original function add(1,2,3)

// apply()
// just like call() the first argument here lets us change the this keyword in the function
// we rarely use these property functions(methods) in funcitonal javascript
// these function are more usual in OOP in the means of controlling inner state
// before ES6 the apply function was the esieast to use when calling functions with arrays -
// now we can use the spread operator instead

console.log(add.apply(null, [1, 2, 3]))


// bind()
// the bind function is more practical, can be very usefull to us in functional programming
// it lets us bind arguments of are function, just as with partial application, but in a neater way
// first argument also lets us change the this keyword inside the function

const add1 = add.bind(null, 1) // we set the first argument x to a static value of 1
console.log(add1(2, 3)) // 6
