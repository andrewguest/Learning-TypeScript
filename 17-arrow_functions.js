// Fat arrow notations are used for anonymous functions i.e for function expressions.
// They are also called lambda functions in other languages.
// Using fat arrow (=>) we drop the need to use the 'function' keyword.
/*
"let sum ="  define a variable to hold the returned value of the arrow function.

"(x: number, y: number):"  define two parameters that need to be supplied to the
   arrow function of number data type.

"number => {"  set the return data type of the function to be number
*/
var sum = function (x, y) {
    return x + y;
};
// Define an arrow function that doesn't take any parameters ()
var Print = function () { return console.log("Hello TypeScript"); };
