// For loop with break and continue in javascript

// loops or iterations

// for loop
// print 1 to 10

for (let i = 1; i <=10; i++){
    const element= i
    if(element==7){
        console.log("7 is the best number");
    }
    console.log(i);
}

// for loop within a for loop
for (let i = 1; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop: ${i}`);
    }
}

// print the multiplication table of 1 to 10
for (let i = 1; i <=10; i++) {
    console.log(`Table of ${i} is:`);
    for (let j = 1; j <=10; j++) {
        console.log(i+'*'+j+'='+i*j);
    }
}

// for loop => array
let myGods= ["Shiv", "Hanuman", "Krishna"]
for (let i = 0; i < myGods.length; i++) {
    const element = myGods[i];
    console.log(element);
}

// for loop => conditional statement
//          => break and continue
for (let i = 1; i <=20; i++){
    if(i==7){
        console.log("Detected 7");
        break
    }
    console.log(`Value of i is: ${i}`);
}

for (let i = 1; i <=20; i++){
    if(i==7){
        console.log("Detected 7");
        continue
    }
    console.log(`Value of i is: ${i}`);
}