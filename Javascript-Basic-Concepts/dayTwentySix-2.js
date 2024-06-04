// Control flow in javascript in 1 shot

// switch
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

/* select the portion whatever you want, then
                                    for Windows => Shift+Alt+⬇
                                    for Mac => Shift+Option+⬇
*/

const month= 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Else");
        break;
    default:
        console.log("default case match");
        break;
}

// Q> Why we use break?
// Ans> If we don't use break, then from where our case matched after that all the cases are executed in console except default.