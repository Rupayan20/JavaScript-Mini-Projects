// High Order Array loops

// for of 
// ["", "", ""] => strings in array
// [{}, {}, {}] => objects in array

/*
for (const iterator of object) {
    
}
*/

const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greeting= "Hello World!"
for (const greet of greeting) {
    console.log(`Each character is ${greet}`);
}


// Maps
// The "Map" object holds unique key-value pairs and remembers the original insertion order of the keys.

// example  no: 1
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
console.log(map);

for (const [country, character] of map) {
    console.log(country, ':-', character);
}

//  Note: basically "for of" loop use for object