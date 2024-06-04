// 2 projects with Async JS


const sayNameDate= function(name) {
    console.log(name, Date.now());
}

let greeting

document.querySelector("#start").addEventListener("click", function(){
    greeting= setInterval(sayNameDate, 1000, "Rup")
})

document.querySelector('#stop').addEventListener("click", function(){
    clearInterval(greeting)
})