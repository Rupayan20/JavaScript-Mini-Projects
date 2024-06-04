// Lets build 4 Javascript projects for beginners

// project no: 1 => Color Changer or Color Scheme Switcher
const btn= document.querySelectorAll('.button')
const body= document.querySelector('body')

btn.forEach( function(button) {
    button.addEventListener('click', function(event){
        if(event.target.id==='limegreen'){
            body.style.backgroundColor= event.target.id;
        }

        if(event.target.id==='red'){
            body.style.backgroundColor= event.target.id;
        }

        if(event.target.id==='yellow'){
            body.style.backgroundColor= event.target.id;
        }

        if(event.target.id==='blue'){
            body.style.backgroundColor= event.target.id;
        }
        event.stopPropagation();
    })
});

body.addEventListener("click", () => {
    body.style.backgroundColor= 'white';
})