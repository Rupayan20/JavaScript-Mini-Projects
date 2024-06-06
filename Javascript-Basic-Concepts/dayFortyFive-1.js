// Class constructor and static

// ES6
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne= new user("Rupayan", "duttarupayan08@gmail.com", 'Rup@123');
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

// behind the scene
function anotherUser(username, email, password){
    this.username= username;
    this.email= email;
    this.password= password;
}
anotherUser.prototype.encryptPassword= function(){
    return `xyz${this.password}abc`
}
anotherUser.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const userTwo= new anotherUser("Rup", "rupayandutta41@gmail.com", '@Rupdutta123');
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());