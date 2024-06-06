// Magic of Prototype in Javascript

// promise
let myName1= "Rup   "
console.log(myName1.trim().length);

let myName2= "Rupayan"
console.log(myName2.truelength);

let myGods= ["Shiv", "Hanuman", "Krishna"]
let godPower= {
    shiv: "Trishul",
    Hanuman: "Gada",
    Krishna: "Sudarshan Chakra",

    getHanumanPower: function(){
        console.log((`power of  Hanuman is ${this.Hanuman}`));
    }
}

Object.prototype.rupu= function(){
    console.log(`rupu is present in all objects`);
}

godPower.rupu()
myGods.rupu()


// Inheritance
// It’s a programming procedure that allows you to reuse code by referencing the behaviors and data of an object. In other words, a class that inherits from another class shares all the attributes and methods of the referenced class.


// old approach
const student= {
    name: "Rupayan",
    email: "duttarupayan08@gmail.com"
}
const teacher= {
    makingVideo: true
}
const teachingSupport= {
    isAvailable: false
}
const techSupport= {
    makeTechAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__= student

// mordern appproach
Object.setPrototypeOf(teachingSupport, teacher)
let anotherUser= 'Rupayan         '
String.prototype.truelength= function (){
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUser.truelength()
"rup".truelength()