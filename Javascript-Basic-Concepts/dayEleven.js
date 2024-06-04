// String in javascript

let name= "rupayan"
let repoCount= 50
// console.log(name+repoCount+" value");  // this is backdated written process

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is called String interpolation and better way to express

const gameName= new String("Rupayan-Dutta")
console.log(gameName[0]);
console.log(gameName.trim.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('D'));

// divided into substring
const newString= gameName.substring(0,7)
console.log(newString);

// reverse position count
const anotherStringOne= gameName.slice(-4,4)
console.log(anotherStringOne);

// remove extra/undesired characters
const newStringTwo= "     rupayan     "
console.log(newStringTwo);
console.log(newStringTwo.trim());
console.log(newStringTwo.trimStart());
console.log(newStringTwo.trimEnd());

// find and replace value
const url= "https://rupyan.com/rupayan%20dutta"
console.log(url.replace('%20', '-'));

// find that any keyword is present or not
console.log(url.includes('rupuu'));  // if present then 'true' otherwise return 'false'

//
const myName= "Rupayan-Dutta-Rupu"
console.log(myName.split('-'));