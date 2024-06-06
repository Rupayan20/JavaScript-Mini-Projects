// Now you know Objects in Javascript

const valuePi= Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(valuePi); // we can't overwrite the value of PI

const  course = {
    courseName: 'Javascript',
    price: 100,
    platform: "Youtube",
    isAvailable: true,

    enroll: function(){
        console.log("don't enroll");
    }
}
console.log(Object.getOwnPropertyDescriptor(course, "courseName"));

Object.defineProperty(course, 'courseName', {
    writable: false,
    enumerable: false
}) 
console.log(Object.getOwnPropertyDescriptor(course, "courseName"));

for (let [key, value] of Object.entries(course)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`); // "enumerable" is false so in the console when we run the code, we check that the courseName is hidden
    }
}