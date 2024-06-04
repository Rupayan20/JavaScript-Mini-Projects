// Control flow in javascript in 1 shot

// if
/*
if (condition){  // conditions= true/false means  <, >, <=, >=, ==, !=, ===, !==

}
*/


if (3=="3"){  // "==" checks that the value is same or not
    console.log("EXECUTED"); 
}


if (2==="2"){  // "===" checks that value as well as the data type is same or not
    console.log("EXECUTED");
}
else{
    console.log("Different Data Type");
}

if (2!=3){  // "!=" Inequality operator is used to compare two operands and returns true if both the operands are unequal it is basically the opposite of the Equality Operator. 
    console.log("EXECUTED");
}
else{
    console.log("Not Executed");
}


// example no: 1
const isUserLoogedIn= true
const temperature= 30
if(temperature<50){
    console.log("temperature is less than 50");
}
else{
    console.log("temperature is greater than 50");
}


// example no: 2
const score= 100

if(score>75){
    const power= "fly"
    console.log(`user power: ${power}`);
}


// example no: 3
const balance= 1000
if (balance>500) console.log("no penalty charges"); // this way  we avoid scope "{}"


// example no: 4 
const bankBalance= 1000
if(bankBalance<500){
    console.log("less than 500");
} 
else if(bankBalance<750){
    console.log("less than 750");
}
else if(bankBalance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


// example no: 5
const userLogged= true
const debitCard= true
const userLoggedInFromGoogle= false
const userLoggedInFromEmail= true

if(userLogged && debitCard){ // for "&&" operation two or more than conditions should be true, then we get our desired output
    console.log("Allow to buy course");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){ // for "||" operation any one condition should be true, then we get our desired output
    console.log("Allow to enter");
}