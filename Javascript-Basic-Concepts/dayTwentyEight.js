// While and do while loop in Javascript

// while loop
/*
while (condition) {
    
}
*/

let index = 0;
while (index <= 77) {
    console.log(`Value of the index is: ${index}`);
    index= index+7
}

let myGods= ["Shiv", "Hanuman", "Krishna"]
let arr= 0
while(arr<myGods.length) {
    console.log(`Value is ${myGods[arr]}`);
    arr= arr+1
}


// do while loop
/*
do {
    
} while (condition);
*/

let score1= 1
do {
    console.log(`Score 1 is ${score1}`);
    score1++
} while (score1<=10);

let score2= 11
do {
    console.log(`Score 2 is ${score2}`);
    score2++
} while (score2<=10);

// Note: in do-while loop, we firstly executed the console and after that we check main condition