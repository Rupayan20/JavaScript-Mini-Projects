// High Order Array loops

// for each 
/*
array.forEach(element => {
    
});
*/

// example no: 3
const prog= ["js", "rb", "py", "java", "cpp"]
prog.forEach( function(val) {
    console.log(val);
} )

// example no: 4
const subj= ["dsa", "oops", "dbms", "os"]
subj.forEach( (item) => {
    console.log(item);
} )

// example no: 5
const myGods= ["Shiv", "Hanuman", "Krishna"]
function God(item) {
    console.log(item);
}
myGods.forEach(God)

// example no: 6
const myHeroes= ["Ratan Tata", "Sandeep Maheswari", "Arijit Singh"]
myHeroes.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// example no: 7
const myFamily= [
    {
        myFirstPrior: "Sutapa Dutta",
        mySecondPrior: "Binoy Kumar Dutta"
    },
    {
        myFirstPrior: "Jayanta Biswas",
        mySecondPrior: "Susanta Biswas",
        myThirdPrior: "Subhamay Sarkar"
    },
    {
        myFirstPrior: "Abhijit Dutta",
        mySecondPrior: "Ashmita Sadhu"
    }
]
myFamily.forEach( (item) => {
    console.log(item.myFirstPrior);
} )