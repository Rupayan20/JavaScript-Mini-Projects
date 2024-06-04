// Filter map and reduce in javascript

const myNum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNum1= myNum.map( (num) => num+10 )
console.log(myNewNum1);

const myNewNum2= myNum.map( (num) => num*10 ).map( (num) => num+1 )
console.log(myNewNum2);

const myNewNum3= myNum
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>50 )
console.log(myNewNum3);