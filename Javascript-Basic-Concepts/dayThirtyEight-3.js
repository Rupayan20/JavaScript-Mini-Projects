// 2 porjects with Async JS

// Project no: 1 => Random Color Changes in Background

const randomColor= function(){
    const hex= "0123456789ABCDEF"
    let color="#"

    for(i=1; i<7; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalId
const startChangingColor= function(){
    if(!intervalId){
        intervalId=setInterval(colorChanged, 1000);
    }

    function colorChanged(){
        document.body.style.backgroundColor= randomColor();
    }
}
const stopChangingColor= function(){
    clearInterval(intervalId)
    intervalId= null;
}

document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)