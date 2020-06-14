const person = {
  name: 'Jimmy Smith',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  title: 'developer',
  company: 'ABC Software',
};

const personAndCareer = {
  ...person,
  ...careerData,
}

//console.log(personAndCareer)

const personNameAndCareer = {
  name: person.name,
  ...careerData,
}

//console.log(personNameAndCareer)

/* 
Remember, if we use the pread operator on two(or more) objects thats has the same property 
name on one(or more) poprerty it will be the last one that is going to be shown in the new merged object. 
*/

const person2 = {
  name: 'Jimmy Smith',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData2 = {
  title: 'developer',
  company: 'ABC Software',
  age: 5,
};

const spreadWithSamePropName = {
  ...person2,
  ...careerData2,
};

//console.log(spreadWithSamePropName)

/* This overwriting can com in handy when we want to update an object*/

const updates = {
  name: 'James Johnson',
  age: 55,
}

const updatedPerson2 = {
  ...person2,
  ...updates, // updates must come after
}

// console.log(updatedPerson2)

const updatedPerson2Again = {
  ...person2,
  name: 'Josephine Jameson', // updates must come after
  age: 65,
}

console.log(updatedPerson2Again)

// SPREAD ARRAYS 
// add to beginning of array
// add to end of array
const numbers = [1, 2, 3, 4, 5]
const newNumbers = [
  0,
  ...numbers,
  6,
]

console.log(newNumbers)
// The spread operator lets us work with array without having to use methods
// like push and pop, methods that mutate the array

