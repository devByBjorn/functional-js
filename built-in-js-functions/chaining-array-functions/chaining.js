const employees = [
  {
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
  },
  {
    name: 'Johny Olsen',
    age: 64,
    jobTitle: 'developer',
    salary: 90000,
  },
  {
    name: 'Jenny Olsen',
    age: 24,
    jobTitle: 'developer',
    salary: 60000,
  },
  {
    name: 'Jimmy Olsen',
    age: 42,
    jobTitle: 'developer',
    salary: 78000,
  },
  {
    name: 'Sandra Enderson',
    age: 35,
    jobTitle: 'engineer',
    salary: 75000,
  },
  {
    name: 'Sammy Enderson',
    age: 35,
    jobTitle: 'engineer',
    salary: 79000,
  },
  {
    name: 'Susan Enderson',
    age: 35,
    jobTitle: 'engineer',
    salary: 85000,
  },
  {
    name: 'Sandro Enderson',
    age: 35,
    jobTitle: 'engineer',
    salary: 65000,
  },
  {
    name: 'Elisabeth Ericson',
    age: 25,
    jobTitle: 'Secretary',
    salary: 40000,
  }];

// const developers = employees.filter(employee => employee.jobTitle === 'developer')
// console.log(developers)
// const developersSalaries = developers.map(developer => developer.salary)
// console.log(developersSalaries)
// const totalDevelopersSalary = developersSalaries.reduce((acc, x) => acc + x, 0)
// const averageDeveloperSalary = totalDevelopersSalary / developersSalaries.length
// console.log(averageDeveloperSalary)

const developers = employees.filter(employee => employee.jobTitle === 'developer')

const totalDevelopersSalary = developers
  .map(developer => developer.salary)
  .reduce((acc, x) => acc + x)

console.log('total salary of all devs: ' + totalDevelopersSalary);

const averageDeveloperSalary = totalDevelopersSalary / developers.length
console.log('average salary of all devs: ' + averageDeveloperSalary);

const nonDevelopers = employees.filter(employee => employee.jobTitle !== 'developer')

const totalNonDevelopersSalary = nonDevelopers
  .map(nonDeveloper => nonDeveloper.salary)
  .reduce((acc, x) => acc + x, 0)

console.log('total non dev salarys: ' + totalNonDevelopersSalary)

