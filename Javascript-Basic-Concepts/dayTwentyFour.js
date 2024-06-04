// Immediately Invoked Functon Expressions (IIFE)

// sometimes we faced problems for global text polutions. So to ignore that problem or remove that polution, we use IIFE

function databaseCreate() {
    console.log(`Database Connected`);
}
databaseCreate();

// same code in other way and to check it's output please comment out above's all code (line 3-6)
(function databaseCreation() {
    // named IIFE
    console.log(`Database Connection completed`);
})();

// another way
   // unnamed IIFE or simple IIFE
( (name) => {
    console.log(`Another Datavase Connected for ${name}`);
}) ("Rupayan")

// NOTE: when we write two functions using IIFE in same code, then we have to use ";" after completing the code otherwise give errors in output