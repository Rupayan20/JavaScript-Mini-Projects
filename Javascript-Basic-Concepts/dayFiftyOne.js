// You don't know array in javascript | PACKED vs HOLEY | JSVU | V8-debug

// const myArr= [];
// %DebugPrint(myArr)

/* Note: this is not running in console.
basically this is for v8-debug

array=> Packed (Continuous), Holey
                          🢃
                        Types
                          🢃
                         SMI
                    Packed element
            Double (float, steing, function)
*/

// Packed_SMI_ELEMENTS
const arrTwo= [1,2,3,4,5]
arrTwo.push(6.0) // now it's converted into => Packed_DOUBLE_ELEMENTS
arrTwo.push("7") // now it's converted into => Packed_ELEMENTS

arrTwo[10]= 10 // now it's converted into => HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

/*
bound check
hasOwnProperty(arrTwo, 9)
hasOwnProperty(arrTwo.prototype, 10)
hasOwnProperty(Object.prototype, 10)
=> that's why holes are very expensive
*/

const arrThree= [1,2,3,4,5]
console.log(arrThree[2]);
// SMI > DOUBLE > PACKED
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED

const arrFour= new Array(3) // now just has 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0]= '1' // HOLEY_ELEMENTS
arrFour[1]= '2' // HOLEY_ELEMENTS
arrFour[2]= '3' // HOLEY_ELEMENTS

const arrFive= [] // give same result but this is a quite optimized way 
arrFour[0]= '1' // PACKED_ELEMENTS
arrFour[1]= '2' // PACKED_ELEMENTS
arrFour[2]= '3' // PACKED_ELEMENTS

const arrSix= [1,2,3,4,5]
arrSix.push(NaN) // PACKED_DOUBLE
arrSix.push(Infinity) // PACKED_DOUBLE

// for, for-of, forEach 


// node dayFiftyOne.js