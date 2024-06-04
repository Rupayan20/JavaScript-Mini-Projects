// Object Oriented in Javascript 

/*
# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

# parts of OOP
- Object literal

- Construction function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
*/

const user= {
    userName: 'Rup',
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.userName}`);
        console.log(this);
    }
}
console.log(user.userName);
// console.log(user.getUserDetails());
console.log(this);


function anotheruser(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting= function() {
        console.log(`welcome ${this.userName}`);
    }
    return this  // by default "return this", but we write "return this" for better understading
}

const userOne= new anotheruser("Rupayan", 5, true);
const userTwo= new anotheruser("Rup", 11, false);
console.log(userOne);
console.log(userOne.constructor);
console.log(userOne instanceof anotheruser);
console.log(userOne instanceof Object);

console.log(userTwo);