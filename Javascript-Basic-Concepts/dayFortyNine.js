// Lexical scoping and Closure

/* Closures => A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/
/*
function init() {
    let name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    displayName();
  }
  init();
*/

function outer(){
    let username= 'Rupayan'
    function innerOne(){
        let password= "123"
        console.log("innerOne", username);
    }
    function innerTwo(){
        console.log("innerTwo", username);
        console.log(password);
    }
    innerOne()
    innerTwo()
}
outer()
console.log("outer", username);

// Closure
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  