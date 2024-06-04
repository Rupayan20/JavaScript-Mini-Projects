// API request and V8 engine

const reqUrl= 'https://api.github.com/users/hiteshchoudhary';
const xhr= new XMLHttpRequest();
xhr.open('GET', reqUrl)
xhr.onreadystatechange= function() {
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data= JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
    }
}
xhr.send();