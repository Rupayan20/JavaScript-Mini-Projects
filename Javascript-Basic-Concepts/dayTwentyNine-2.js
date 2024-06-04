// High Order Array loops

// for in
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        for (const gameName of myObj) {
            
        }
    }
}
*/


// example  no: 2
const myObj= {
    'game1': "cricket",
    'game2': "football",
    'game3': "tennis",
    'game4': "hockey"
}
for (const key in myObj) {
    console.log(`This ${key} means ${myObj[key]}`);
}

// example no: 3
const prog= ["js", "rb", "py", "java", "cpp"]
for (const programing in prog) {
    console.log(prog[programing]);
}

//  Note: basically "for in" loop use for array