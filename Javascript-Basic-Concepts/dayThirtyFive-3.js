// Lets build 4 Javascript projects for beginners

// project no: 3 => Digital Clock

const clock= document.getElementById('clock')

setInterval( function() {
    let date= new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString()
}, 1000 )
