// Classes are the fundamental entities used to create reusable components.

// class named "Employee"
class Employee {
    // "empCode" is a number data type
    empCode: number;
    // "empName" is a string data type
    empName: string;

    // The constructor is a special type of method which is called when creating an object.
    // In TypeScript, the constructor method is always defined with the name "constructor".
    // In the constructor, members of the class can be accessed using this keyword e.g. this.empCode or this.name. 
    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    // Defining a function that doesn't take any parameters, but returns a "number" data type.
    getSalary(): number {
        return 10000;
    }
}


// Creating an "instance" of the "Employee" class
let emp = new Employee(1, "Steve");

// Print the 
console.log(emp.empCode);
console.log(emp.empName);


// Class inheritance
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// The "Customer" class extends the "Person" class
class Customer extends Person {
    customerCode: number;

    constructor(customerCode: number, name: string) {
        super(name);
        this.customerCode = customerCode;
    };

    displayName(): void {
        console.log("Name = " + this.name + ", Customer Code = " + this.customerCode);
    }
}

let customer = new Customer(100, "Bill");
customer.displayName();