// Array in Javascript
// array => object

const myArray= [0, 1, 2, 3, 4, 5]
const myGod= ["Shiv", "Hanuman", "Krishna"]
const myArray2= new Array(1,2,3,4)

// Array methods
myArray.push(6) // "push" function helps to add one new element to the last position of the array
myArray.pop() // "pop" function helps to remove last element from the array
myArray.unshift(1) // "unshift" function helps to add one element to the first position of the array, but this is not optimized way
myArray.shift() // "shift" function helps to remove first element from the array

console.log(myArray);
console.log(myArray.includes(7)); // "includes" check that the element is present or not in the array, if present then return "true" otherwise return "false"
console.log(myArray.indexOf(7)); // "indexOf" check the index number of an element, if the element is not present in tha array then the value is "-1"

const myNewArr= myArray.join() // "join" basically converts an array into a string format
console.log(myNewArr);
console.log(typeof(myNewArr));

// slice and splice
console.log("A ", myArray);
const arr1= myArray.slice(2, 5) // "slice" basically starts from the given firstValue and ends from the (given lastValue-1)
console.log(arr1);

console.log("B ", myArray);
const arr2= myArray.splice(2, 5) // "splice" basically starts from the given firstValue and ends from the given lastValue
// but the main function of "splice" is it's manipulaed the original array. After applying splice, the original array will be spliced
console.log(arr2);
console.log("C ", myArray);