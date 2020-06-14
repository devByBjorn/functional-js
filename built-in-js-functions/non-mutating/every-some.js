// Every checks if all items meets our condition and returns true if so
const formValues = [
  'Erik',
  'Eriksson',
  'Stockholm',
  '',
];

const isNotEmpty = string => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled); // false


// Some checks if any of the items meets our condition and if so returns true
const employees = [{
  name: 'Jane Doe',
  salary: 500000,
},
{
  name: 'John Doe',
  salary: 800000,
},
{
  name: 'Jennifier Dolitle',
  salary: 1200000,
},
{
  name: 'James Morrow',
  salary: 250000,
}];

const makesMoreThanOneMillion = employee => employee.salary > 1000000;
const result = employees.some(makesMoreThanOneMillion);
console.log(result); // true