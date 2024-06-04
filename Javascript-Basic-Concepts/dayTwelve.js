// Number and Maths in Javascript

const score= 400
console.log(score);

const balance= new Number(100.123456789)
console.log(balance);
console.log(balance.toString()); //now we use all the properties or functions of string
console.log(balance.toFixed(3));

const otherNum= 177.7654
console.log(otherNum.toPrecision(5));

const anotherNum= 10000000
console.log(anotherNum.toLocaleString('en-IN'));


console.log(Math);

console.log(Math.abs(-7)); // convert negative value into positive value

console.log(Math.round(7.4)); // convert a value if it's value is equal or more than 0.5 then consider as 1

console.log(Math.ceil(7.2)); // any floating number value is greater that 0.1 to 0.9, then it is considered as 1

console.log(Math.floor(7.2)); // convert any float value into integer value

console.log(Math.max(8,2,10,5)); // find out the max value from an array

console.log(Math.min(8,2,10,5)); // find out the min value from an array

console.log(Math.random()); // find out the random value and we get always a number between 0 and 1

console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); 

const min= 10
const max= 20
console.log(Math.floor(Math.random() * (max-min+1) + min));