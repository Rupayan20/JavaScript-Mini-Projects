// Events in Javascript

/*
document.getElementById('owl').onclick= function(){
    alert("owl")
}
*/
//Note: This is not right approach of using ".onclick". Use ".addEventListener()"

document.getElementById('owl').addEventListener("click", function(event){
    alert("owl clicked")
}, false)  // 'false' is default

// another ways => internet explorer - attachEvent(), jQuery - on

// type, timestamp, defaultPrevented, target, toElement, srcElement, currentElement, clientX, ClientY, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListener('click', function(event) {
    console.log("clicked insire the url");
}, false);

document.getElementById('prayer').addEventListener('click', function(event) {
    console.log("prayer clicked");
    event.stopPropagation()
}, false);

/* Note:
Code Bubbling (for false): Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to the root of the DOM tree.
Code Capturing (for true): Event capturing is the opposite of event bubbling. The event starts from the root and propagates down to the target element.
*/

document.getElementById('google').addEventListener('click', function(event){
    event.preventDefault();  // now the url of Google is not working
}, false)

document.querySelector('#images').addEventListener('click', function(event){
    const tagName= console.log(event.target.tagName);

    if(event.target.tagName==="IMG"){
        let targetImage = console.log(event.target.id)
        let removeImage= event.target.parentNode
        removeImage.remove()
        // removeImage.parentNode.removeChild(removeImage)
    }
})