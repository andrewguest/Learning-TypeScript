// Define a function named "Sum" that takes 2 "number" types as parameters
// Will return a "number" data type
function Sum(x: number, y: number): number {
    return x + y;
}

Sum(2, 3); // returns 5


// An anonymous function is one which is defined as an expression.
// This expression is stored in a variable. So, the function itself does not have a name.
let greeting = function () {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 


// Optional parameters
// A parameter marked with a "?" is an optional parameter that does NOT have to be supplied.
function Greet(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!';
}
Greet('Hello', 'Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".



// Default parameters
// TypeScript provides the option to add default values to parameters.
// So, if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.
function Greet_default(name: string, greeting: string = "Hello"): string {
    return greeting + ' ' + name + '!';
}
Greet_default('Steve');//OK, returns "Hello Steve!"
Greet_default('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet_default('Bill'); //OK, returns "Hello Bill!"
