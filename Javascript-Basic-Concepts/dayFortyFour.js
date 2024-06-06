// Call and this in javascript

function setUserName(username){
    // complex db calls
    this.username = username;
}
function createUser(username, email, password){
    setUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const user1= new createUser("Rupayan", "duttarupayan08@gmail.com", "@Rup123")
console.log(user1);