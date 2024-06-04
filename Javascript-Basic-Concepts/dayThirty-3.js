// Filter map and reduce in javascript

// reduce
// example no: 1
const myNum1= [1, 2, 3]
 const myNewNum1= myNum1.reduce(function(accumulator, currentValue) {
    console.log(`the value of accumulator is: ${accumulator} and the current value is: ${currentValue}`);
    return accumulator+currentValue
 }, 0)
console.log(`so, the final value is: ${myNewNum1}`);

// with help of => (arrow) function
const myNum2= [3, 2, 1]
const myNewNum2= myNum2.reduce( (accumulator, currentValue) => {console.log(`the value of accumulator is: ${accumulator} and the current value is: ${currentValue}`);
                                                               return accumulator+currentValue}, 0 )
console.log(`so the final value is: ${myNewNum2}`);


// example no: 2
const shopCart= [
    {
        itemName: "Full Stack Web Development Course",
        price: 999,
        courseDuration: 6
    },
    {
        itemName: "Mobile Application Course",
        price: 1999,
        courseDuration: 10
    },
    {
        itemName: "Cyber Security Course",
        price: 1499,
        courseDuration: 8 
    },
    {
        itemName: "Data Scientist Course",
        price: 1299,
        courseDuration: 6
    },
]

const totalCartPrice= shopCart.reduce( (accumulator, item) => accumulator+item.price, 0)
console.log(`Total Cart Price is: ${totalCartPrice}`);