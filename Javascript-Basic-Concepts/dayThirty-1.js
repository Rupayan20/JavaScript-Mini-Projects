// Filter map and reduce in javascript

// example no: 1
const prog= ["js", "rb", "py", "java", "cpp"]
const progLang= prog.forEach( (item) => {
    console.log(item);
    return item
} )
console.log(progLang);  // in output we get "undefined". So we concluded that "forEach" never returns any value.


// example no: 2
const myNum1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num1= myNum1.filter( (num) => num>=7 )
console.log(num1);


const myNum2= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num2= myNum2.filter( (num) => {
    return num<=5
} )
console.log(num2);

// Note: we can write the code in both way using "filter". But when we use curly brackets {} or scope we have to keep one thing that we have to "return" the condition to get output.


const myNum3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num3= []
myNum3.forEach( (num) => {
    if(num>=6){
        num3.push(num)
    }
} )
console.log(num3);


// example no: 3
const books= [
    {title: 'book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'book four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'book five', genre: 'science', publish: 2009, edition: 2014},
    {title: 'book six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'book seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'book eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];
let searchBooks= books.filter( (result) => result.genre==='History' && result.edition>2000 )
console.log(searchBooks);