// Getter Setter and Stack Overflow

// class based => define property => get, set
function user(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const userTwo = new user ("rupayandutta41@gmail.com", "@RD12345")
console.log(userTwo.email);