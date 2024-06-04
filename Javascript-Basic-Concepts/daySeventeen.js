// Objects in Javascript part 2

const fbUser1= new Object() // singleton object
const fbUser2= {} // non singleton object
// both gives same output in console
console.log(fbUser1);
console.log(fbUser2);

const fbUser3= new Object() 
fbUser3.id= "3046"
fbUser3.name= "Rupayan"
fbUser3.isLoggedIn= false
console.log(fbUser3);

const fbUser4= {
    email: "duttarupayan08@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rupayan",
            lastName: "Dutta"
        }
    }
}
console.log(fbUser4.fullName.userFullName);

const obj1= {
    firstName: "Rupayan",
    lastName: "Dutta"
}
const obj2= {
    myFirstName: "Rupu",
    myLastName: "Dutta"
}
const obj3= {
    firstNaming: "Rup",
    lastNaming: "Dutta"
}
const obj4= Object.assign({}, obj1, obj2, obj3) // using {} I tell that the obj3 should be in {...} with more values // {} => target and obj1, obj2, obj3... => sources
console.log(obj4);
// better way to write the code using spread 
const obj5= {...obj1, ...obj2, ...obj3}
console.log(obj5);

const users= [
    {
        id: 1,
        email: "duttarupayan08@gmail.com"
    },
    {
        id: 2,
        email: "duttarupayan09@gmail.com"
    },
    {
        id: 3,
        email: "duttarupayan10@gmail.com"
    },
    {
        id: 4,
        email: "duttarupayan11@gmail.com"
    },
    {
        id: 5,
        email: "duttarupayan12@gmail.com"
    },
]
users[1].email
console.log(fbUser3);
console.log(Object.keys(fbUser3)); // extract the keys
console.log(Object.values(fbUser3)); // extract the keys' values
console.log(Object.entries(fbUser3)); // make a pair of ['key', 'value'] of each keys
console.log(fbUser3.hasOwnProperty('isLoggedOff')); // "hasOwnProperty" checks that that the user wants which key that is actually exists or not and it returns true if it exists otherwise returns false 