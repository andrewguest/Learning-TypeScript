// Defining a function in TypeScript
// a: number  defines a variable 'a' as an input that will be a 'number' type
function addNumbers(a: number, b: number) {
    return a + b;
}

// This defines a variable 'sum' that will be a 'number' type as the
//   output of the 'addNumbers' function call.
var sum: number = addNumbers(10, 15);
console.log('Sum of the two numbers is: ' + sum)