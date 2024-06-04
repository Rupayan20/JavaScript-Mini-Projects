// Global and local scope in javascript

// global scope
var c= 40
let d= 50
// block scope
if(true){
    let a= 10
    const b= 20
    var c= 30
}

console.log(a); // we do not get the value of let "a" in concole, because it is defined in scope of the "if" condition
console.log(b); // we do not get the value of const "b" in concole, because it is defined in scope of the "if" condition
console.log(c); // when we want to check the value of var "c", we get it's value 30 instead of fourty in console. This is not expected at all. That's why we ignore the use of "var"
console.log(d);

// "let" use as global scope which is not expected at all
// "var" and "const" use as block scope