// // FUNCTIONS AS DATA - Mocking out time intensive code when in development
const myFunc = true
  ? () => console.log('First option')
  : () => console.log('Second option');

const DEVELOPMENT = true;

const fetchDataReal = () => {
  //time intensice operations here
};

const fetchDataFake = () => ({
  name: 'Björn',
  age: 33,
});

const fetchData = DEVELOPMENT
  ? fetchDataFake
  : fetchDataReal;
