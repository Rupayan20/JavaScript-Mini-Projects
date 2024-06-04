// All DOM selectors NodeList and HTMLCollection

// firstly run the "dayThirtyTwo.html" file in local server and inspect the page. Next go to the "Console" and run these codes one by one

document.getElementById('title')  // in console => <h1 id="title" class="heading">Document Object Model Learning</h1>
document.getElementById('title').id  // in console => 'title'
document.getElementById('title').class  // in console => undefined
document.getElementById('title').className  // in console => 'heading'
document.getElementById('title').getAttribute  // in console => ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('id')  // in console => 'title'
document.getElementById('title').getAttribute('class')  // in console => 'heading'
document.getElementById('title').getAttribute('class', 'head heading')  // in console => undefined. But in html file we see the change in h1 class.

const myTitle= document.getElementById('title')
// styling add
myTitle.style.backgroundColor= 'green'
myTitle.style.padding= "15px"
myTitle.style.borderRadius= "25px"

// text
myTitle.innerHTML  // in console => Document Object Model Learning <span style="display: none;">on YouTube</span>
myTitle.textContent  // in console => Document Object Model Learning 
myTitle.innerText  // in console => Document Object Model Learning on YouTube

document.getElementsByClassName('heading')  // in console => HTMLCollection [h1#title.heading, title: h1#title.heading]
document.querySelector('h2')  // in console => <h2>Lorem ipsum dolor</h2>
document.querySelector('#title')  // in console => <h1 id="title" class="heading">…</h1>
document.querySelector('.heading')  // in console => <h1 id="title" class="heading">…</h1>
document.querySelector('input[type="password"]')  // in console => <input type="password" name id fdprocessedid="0sgfjs">

document.querySelector('ul')  // in console => <ul>…</ul>
const myUl = document.querySelector('ul')  // in console => undefined
myUl.querySelector('li')  // in console => <li>…</li>
const turnGreen = myUl.querySelector('li')  // in console =>
turnGreen.style.backgroundColor= 'green'  // in console =>

document.querySelectorAll('li')  // in console => NodeList(3) [li, li, li]
const tempList= document.querySelectorAll('li')  // in console => undefined
tempList  // in console => NodeList(3) [li, li, li]

/* Note: Difference between NodeList and Array
Ans> NodeList is not pure array, in NodeList we don't have "map" function. But in array we have that "map" function.
*/

tempList[1].style.color= 'green'
tempList.forEach(function(list){
    list.style.backgroundColor= 'green'
})

document.getElementsByClassName('')  // in console => HTMLCollection []
document.getElementsByClassName('list-item')  // in console => HTMLCollection(3) [li.list-item, li.list-item, li.list-item]
const tempClassList = document.getElementsByClassName('list-item')

// NodeList to Array conversion
const myTempArray= Array.from(tempClassList)
myTempArray  // in console => [li.list-item, li.list-item, li.list-item] 
myTempArray.forEach( function(list) {
    list.style.color= 'orange'
})