// Scope level and mini hoisting in javascript

// nested function
function one(){
    const userName= "Rupayan"

    function two(){
        const platform= "VS Code"
        console.log(userName);
    }
    // console.log(platform);  // this can't be executed, because of scope

    two()
}
one()

// if-else condition
if(true){
    const user= "Rupu"
    if(user==="Rupu"){
        const myPlatform= " uses VS Code"
        console.log(user + myPlatform);
    }
    // console.log(myPlatform); // get error
}
// console.log(user); // get error

//Hoisting 

// Example 1: add 1 with the input number
addOne(5)
function addOne(number){
    return number+1
}
// in Example 1, we see that we use variable or function before declaration. This is called hoisting.


// Example 2: add 2 with the input number
const addTwo = function(anotherNumber){
    return anotherNumber+2
}
addTwo(5)
// in Example 2, we see that we store the function in a const value, that's why we don't call or use the variable before declaration. 