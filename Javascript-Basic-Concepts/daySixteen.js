// Objects in depth in Javascript

// singleton => it makes from constructors
// Object.create

// object literals

const mySym= Symbol("key1")

const jsUser= {
    firstName: "Rupayan",
    middleName: "",
    lastName: "Dutta",
    [mySym]: "mykey1",  // this is syntax for using "symbol" and use brackets/[]
    age: 24,
    location: "Fulia",
    email: "duttarupayan08@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

jsUser.email= "rupayandutta41@gmail.com" // change the value

// Object.freeze(jsUser) // now I want that any user do not change their any key's values further

jsUser.firstName= "Rupu"

console.log(jsUser.firstName); // we write in both way like "(jsUser.firstName)" or "(jsUser["firstName"])"
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(jsUser);

jsUser.greeting= function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.firstName}`);
}
console.log(jsUser.greeting()); // check it's output in console firstly we have to comment out line number 24: "Object.freeze(jsUser)"
console.log(jsUser.greetingTwo());