// PRIVATE VARIABLES 
const Person = ({
  name,
  age,
  job,
}) => {
  var _name = name;
  var _age = age;
  var _job = job;

  // returns object of functions, getters and setters
  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: newJob => _job = newJob,
  };
}

const me = Person({ name: 'Björn', age: 32, job: 'none' });
console.log(me.getName()); // Björn
me._name; // undefined
console.log(me.getJob())
me.setJob('developer')
console.log(me.getJob())

/* The only way to access the name, age, job variable is through the
  Person "class"(object we created)
*/