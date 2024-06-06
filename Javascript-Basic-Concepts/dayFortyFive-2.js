// Class constructor and static

// Inheritance
class student {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends student {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherOne = new teacher("S.B.", "sb2024@gmail.com", "@SB123");
teacherOne.logMe();

const studentOne = new student("Rup");
studentOne.logMe();

console.log(teacherOne instanceof teacher);
console.log(teacherOne instanceof student);