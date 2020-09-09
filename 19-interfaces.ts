// Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
// Classes that are derived from an interface must follow the structure provided by their interface.

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string;
}

// Interface in TypeScript can be used to define a type and also to implement it in the class.
// This defines a custom "KeyPair" data type that we can use to define variables.
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" };