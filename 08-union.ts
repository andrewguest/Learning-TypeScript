// TypeScript allows us to use more than one data type for a variable or a function parameter.
// This is called union type.

// "code" can be EITHER a "string" or a "number"
let code: (string | number);
code = 123;
// This will overwrite any previous values (such as 123 define above)
code = "ABC";

console.log(code);