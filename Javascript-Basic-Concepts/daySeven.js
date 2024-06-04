// Why string to number conversion is confusing

// Conversion Operation

// for number value
let score1= 7
console.log(score1);
console.log(typeof score1);
// console.log(typeof (score)); // both are same


// for impure & pure number value
let score2a= "77abc"
let valueInNumber2a= Number(score2a)
console.log(typeof valueInNumber2a);
console.log(valueInNumber2a);

let score2b= "77"
let valueInNumber2b= Number(score2b)
console.log(typeof valueInNumber2b);
console.log(valueInNumber2b);


// for null value
let score3= null
let valueInNumber3= Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


// for undefined value
let score4= undefined
let valueInNumber4= Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


// for boolean value
let score5= true
let valueInNumber5= Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);


// for string value
let score6= "rupayan"
let valueInNumber6= Number(score6)
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

// summary of this class
// "7" => 7
// "77abc" => NaN
// true => 1; false => 0


// for boolean conversion
let isLoggedInStatus = 1
let booleanisLoggedInStatus = Boolean(isLoggedInStatus)
console.log(booleanisLoggedInStatus);

// summary of this part
// 1 => true; 0 => false;
// "" => false // empty value is considered as false
// "stringValue" => true // string value is considered as true


// for string value conversion
let num= 77
let stringNum= String(num)
console.log(typeof stringNum);