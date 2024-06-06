// Getter Setter and Stack Overflow

// constructor based => get, set
class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return `!@#$${this._email}%^&*`;
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `6291543493${this._password.toUpperCase()}22021002003046`;
    }
    set password(value){
        this._password = value;
    }
}
const userOne= new user("duttarupayan08@gmail.com", "@Rup123");
console.log(`the mail id: ${userOne.email}`);
console.log(`the password: ${userOne.password}`);