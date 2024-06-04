// Control flow in javascript in 1 shot

// trurthy and falsy
const userEmail= "duttarupayan08@gmail.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values => false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values => "0", 'false', " ", [], {}, function(){}, and except all falsy values

const userAnotherEmail= []
if(userAnotherEmail.length===0){
    console.log("array is empty");
}

const emptyObj= {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
let val1;
val1= 5 ?? 10 // in output => 5
val1= null ?? 10 // in output => 10
val1= undefined ?? 5 // in output => 5
val1= null ?? 10 ?? 15 // in output => 10
console.log(val1);

// Terniary Operator
// condition ? true : false
const teaPrice= 10
teaPrice<=5 ? console.log("less than 5") : console.log("more than 5")