// Array part 2 in Javascript

const myGod= ["Shiv", "Hanuman", "Krishna"]
const myHeroes= ["Shaktiman", "Nagraj", "Chitti"]
myGod.push(myHeroes)
console.log(myGod); // here we see that "myHeroes" is added in the array as a single element.
console.log(myGod[3] [2]); // we can extract the element of a particular element

const myGod1= ["Shiv", "Hanuman", "Krishna"]
const myHeroes1= ["Shaktiman", "Nagraj", "Chitti"]
const newHero1= myGod1.concat(myHeroes1) // "concat" helps to merge two arrays and converts into a single array
console.log(newHero1);

// when we need to add more than two arrays into a single array then we prefer to use "spread" operator
const myGod2= ["Shiv", "Hanuman", "Krishna"]
const myHeroes2= ["Shaktiman", "Nagraj", "Chitti"]
const myOtherHeroes2= ["Captain America", "Spiderman", "Dr. Strange"] 
const newHero2= [...myGod2, ...myHeroes2, ...myOtherHeroes2]
console.log(newHero2);

const anotherArray= [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const usableAnotherArray= anotherArray.flat(Infinity) // "flat" transfers all elements into a single array
console.log(usableAnotherArray);

console.log(Array.isArray("RUPAYAN"));
console.log(Array.from("RUPAYAN")); // it helps to convert string's individual elements into an array
console.log(Array.from({name: "RUPAYAN"})); // it gives just [] value in console

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1, score2, score3)); // it helps to make an array with help of individual elements