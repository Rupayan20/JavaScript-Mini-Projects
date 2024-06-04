// Functions with objects and array in javascript

function calculateCartPrice(val1, val2, ...num1){   // "..." is called rest operator or spread operator
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 500));


// object pass
const user= {
    userName: "Rupayan",
    email: "duttarupayan08@gmail.com"
}
function handleObject(anyobject){  // we don't write "user" in handleObject function. We keep this argument in genric by using "anyobject"
    console.log(`username is ${anyobject.userName} and email id is ${anyobject.email}`);
}
handleObject(user)

// array pass, give the value directly 
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([1,3,4,5]));