// Recreate the map function 
// What does the map function do?
// Executes a function on each element ofthe array it is used with. 
// used with an array
// takes a function as an argument
// calls that function with each item in the array it is used with 

// const map = (arr, func) => {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     const result = func(arr[i])
//     newArr.push(result)
//   }
//   return result
// }

const map = (arr, func) =>
  arr.reduce((acc, x) => [
    ...acc,
    func(x)
  ], [])


console.log(map([1, 2, 3], x => x * 2))
console.log(map([-5, -6, -7, -8, -9, -10], x => -x))
console.log(map(['a', 'b', 'c', 'd']), x => x.toUpperCase())


