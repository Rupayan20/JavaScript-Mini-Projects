// 2 projects with Async JS

const sayName= function () {
    console.log('Rupayan')
}
setTimeout(sayName, 2000)

const sayFullName= function () {
    console.log('Rupayan Dutta')
}
setInterval(sayFullName, 2000)


const changeText= function () {
    document.querySelector('h1').innerHTML= '2 Projects with Async JS'
}

const changeTextAgain= setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeTextAgain)
})