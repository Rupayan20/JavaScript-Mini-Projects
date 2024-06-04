// Stack and Heap Memory in javascript

// Memory => Stack (Primitive), Heap (Non-primitive)

let myYoutubeName= "Rupayan Dutta"
let anotherName= myYoutubeName
anotherName= "I'm Rupuu"
console.log(myYoutubeName);
console.log(anotherName);

let userOne= {
    email: "duttarupayan08@gmail.com",
    phone: 6291543493,
}

let userTwo= userOne

userTwo.email= "rupayandutta41@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);