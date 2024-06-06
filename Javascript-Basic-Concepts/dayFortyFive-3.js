// Class constructor and static

class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const userOne= new user("Rup")
//console.log(userOne.createId()); 

class customerManager extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const companyService=  new customerManager("phoneNumber", "feedback")
console.log(companyService.createId()); // does not give access to the child, inheritance occurs 