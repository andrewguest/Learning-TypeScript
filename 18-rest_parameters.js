// TypeScript introduced rest parameters to accommodate n number of parameters easily.
// When the number of parameters that a function will receive is not known or can vary, we can use rest parameters.
// Rest parameters MUST come last in the function definition.
function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
// "Hello" will be saved as the "greeting" variable inside the function
// "Steve" and "Bill" will be saved in the "...names" variable inside the function
Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
Greet("Hello"); // returns "Hello !"
