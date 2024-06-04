// Date and Time in depth in Javascript

// Date= January 1, 1970, UTC (the epoch) 
// use "Temporal" api

// Dates
let myDate= new Date()
console.log(myDate.toString());  // output: Tue May 21 2024 23:55:20 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // output: Tue May 21 2024
console.log(myDate.toISOString());  // output: 2024-05-21T18:25:59.044Z
console.log(myDate.toJSON());  // output: 2024-05-21T18:26:14.829Z
console.log(myDate.toLocaleString());  // output: 22/5/2024, 11:08:53 am
console.log(myDate.toLocaleDateString()); // output: 21/5/2024

console.log(typeof(myDate)); // output: object

let myNewDate= new Date(2023, 1, 23)  // month starts from 0 (like indexing number)
console.log(myNewDate.toDateString()); 

let myAnotherDate= new Date(2023, 1, 23, 5, 3) 
console.log(myAnotherDate.toLocaleString()); 

let AnotherDate= new Date("2023-1-23")  // "YYYY-MM-DD" format, here month counts from 1
console.log(AnotherDate.toLocaleString()); 

let NewDate= new Date("05-22-2024")  // "MM-DD-YYYY" format follows in India
console.log(NewDate.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(NewDate.getTime());
console.log(Math.round(Date.now()/1000));  // conver milisecond to second

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // for better understanding of end user, we will add +1. so, the output value (month) gets us right month numbering
console.log(newDate.getDay());  // Monday => 1, Tuesday => 2 ...so on

// now we extract the particular day (means Monday to Sunday)
console.log((newDate.toLocaleString('default', {
    weekday: "long"
})));