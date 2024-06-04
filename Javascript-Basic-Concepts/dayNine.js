/// Data types of javascript summary

// Primitive

  // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score= 100
const scoreValue= 100.3
const isLoggedIn= false
const outsideTemp= null  //typeof of "null" is object, because value is unique
let userEmail

// Symbol
const id= Symbol('123');
const anotherId= Symbol('123')
console.log(id===anotherId);

// bigInt
const bigNumber= 1234567909876543210n
console.log(typeof bigNumber);

// Non-primitive or Reference
  // Array, Objects, Functions
const heroes= ["shaktiman", "maagraj","doga"]
let myObj= {
    name: "Rupayan",
    age: 24,
}

const myFunction= function(){
console.log("Hello WOrld");
}