// Functions and parameter in javascript

// basic function where I print my name in console using function
function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}
sayMyName()

// addition of two numbers using function
function addNum(num1, num2){  // basically num1, num2 are parameters
    // we write below two line codes, but here we declare one variable. We don't need an extra variable
    // let addResult = (num1+num2)
    // return addResult
    return num1+num2 // here we don't need an extra variable
}
const addResult= addNum(3,4)  // basically 3 and 4 are the arguments
console.log("Results: ", addResult);

// in console return a message with help of function
function loginUserMessage(username){
    return `${username} you just logged in`
}
console.log(loginUserMessage("hello Rupayan,"));

// if any argument do not pass
function loginUserMessages(anotherUsername){
    if(!anotherUsername){  // or we use "(anotherUsername===undefined)"
        console.log("Please enter a username");
        return;
    }
    return `${anotherUsername} you just logged in`
}
console.log(loginUserMessages()); // no argument passes


// pass a default value to avoid if condition
function newUserMessage(newUser= "hi Rupayan,"){
    return `${newUser} you just logged in`
}
console.log(newUserMessage()); // here we don't pass any argument, so our function condiders the default value