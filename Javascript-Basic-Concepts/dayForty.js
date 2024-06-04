// Promise in javascript

// The "Promise" object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// Promise 1
const promiseOne= new Promise(function (resolve, reject) {
    // Do an async task
       // DB calls, Cryptography, Networks
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function (value) {
    console.log('Promise consumed');
})

// Promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
    }, 2000)
    resolve()
}).then(function (value) {
    console.log('Again promise consumed');
})

// Promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({userName: 'Rupayan', email: 'duttarupayan08@gmail.com'});
    })
})
promiseThree.then(function (user) {
    console.log(user);
})

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error= true
        if(!error){
            resolve({userName: 'Rupayan', password: 'Rup@123'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

const userName= promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then( (username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally( () => console.log('The promise is either resolved or rejected'))


// Promise 5
const promiseFive= new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({subject: 'Javascript', youtube: 'chaiaurcode'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const responsePromise= await promiseFive
    console.log(responsePromise);
    }
    catch (error){
        console.log(error);
    }
}

consumePromiseFive()



// try-catch vs .then
async function getAllUsers1(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        console.log(data);
    }
    catch(error){
        console.log('ERROR ', error);
    }
}
getAllUsers1()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})