// Object Oriented in Javascript

/*
# javascript and classes
## OOP
## Object
- Collection of properties and methods
- toLowerCase

## Why use OOP instead

## parts of OOP
Object literal

- Constructor function
- Prototype
- Classes
- Instance (new, this)

## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
*/

const user= {
    userName: 'Rupayan',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log('Got user details from database');
    }
}

console.log(user);