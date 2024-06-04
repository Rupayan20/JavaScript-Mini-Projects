// Object de-structure and JSON API intro

const course= {
    courseName: "Web Development Course",
    price: "00",
    CourseInstructor: "Chai aur Code"
}

const {CourseInstructor: instructor} = course // I destructured the object from courseInstructor to instructor
console.log(instructor);

// JSON API intro
// {
//     "name": "Rupayan Dutta",
//     "profession": "service",
//     "age": 24
// }