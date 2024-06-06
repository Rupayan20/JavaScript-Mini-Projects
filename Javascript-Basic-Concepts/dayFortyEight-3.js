// Getter Setter and Stack Overflow

// object based => get, set

const user= {
    _email: 'duttarupayan08@gmail.com',
    _password: '@RDutta22021002003046',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email= value
    },

    get password(){
        return `123456789${this._password.toUpperCase()}987654321`;
    },
    set password(value){
        this._password= value
    }
}

const userThree= Object.create(user)
console.log(`the email id: ${userThree.email}, the password is: ${userThree.password}`);