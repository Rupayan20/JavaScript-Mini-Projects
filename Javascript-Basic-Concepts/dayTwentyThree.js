// THIS and arrow function in javascript

const user= {
    username: "Rupayan",
    learningPlatform: "youtube",
    welcomeMessage: function(){
        console.log(`hi ${this.username}, welcome to the website`); // "this" is working under a function
        console.log(this); // in output we get all the information of "user"
    }

}
user.welcomeMessage()
// if I want to write another welcomeMessage for others
user.username= "Rupu"
user.welcomeMessage()
console.log(this); // here we get just empty {} in output. But the same thing when we run into chrome with inspect then we see the context of window.


function one(){
    let username= "rupayan"
    console.log(this.username); // we get undefined because of "this.username". Because "this" is not working under an ibject, it's working only under a function.
}
one()


const two= function() {
    let username= "rupayan"
    console.log(this.username);
}
two() // we get "undefined" in our console


// that's why we use => (arrow) function
const three= () => {
    let username= "rupayan"
    console.log(this.username); // we get "undefined" in our console
    console.log(this); // we get "undefined" in our console
}
three()

// basic => function structure
// () => {}
const addTwo= (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// another way to write same code
const subsTwo= (num1, num2) => num1-num2 // or we write as "(num1-num2)". If we use {}, then we have to write "return", but when we use () then no need to write return
console.log(subsTwo(3,4));

// object return
const userName= () => ({myUsername: "Rupu"}) 
console.log(userName());

// array function