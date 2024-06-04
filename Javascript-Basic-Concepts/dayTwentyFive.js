// How does javascript execute code + call stack

// Javascript Execution Contect => Global Execution Context => this
//                              => Function Execution Context
//                              => Eval Execution Context

// Memory Creation Phase
// Execution Phase

// suppose this is an example of addition of two numbers
let num1= 10;
let num2= 20;
function addNum(num1, num2){
    let finalVal= num1+num2
    return finalVal
}
let result1= addNum(num1, num2)
let result2= addNum(55,22)

// 1. Golbal Execution => this

// 2. Memory Phase
// num1 => undefined
// num2 => undefined
// addNum => defination
// result1 => undefined
// result2 => undefined

// 3. Execution Phase
// num1 => 10
// num2 => 20
// addNum => [New Variable Enviroment + Execution Thread]
//        Memory Phase => num1 => undefined
//                        num2 => undefined
//                        finalVal => undefined
//        Execution Phase => num1 => 10
//                           num1 => 20 
//                           finalVal => 30      // finalVal returns to Global Execution.

// New Variable Enviroment + Execution Thread 
// Steps repeat as it is                                             // after completing Global Execution's task, it will be destroyed  


// suppose three functiions are present; one(), two(), and three()
// in global execution, first one() goes for execution and after that two() and finally three() go for execution
// so now the point is, which function first executes?
// here follows "LIFO" (Last In First Out). Means three(), then two(), and lastly one() executes