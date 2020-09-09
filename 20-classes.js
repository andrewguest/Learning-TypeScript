// Classes are the fundamental entities used to create reusable components.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class named "Employee"
var Employee = /** @class */ (function () {
    // The constructor is a special type of method which is called when creating an object.
    // In TypeScript, the constructor method is always defined with the name "constructor".
    // In the constructor, members of the class can be accessed using this keyword e.g. this.empCode or this.name. 
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    // Defining a function that doesn't take any parameters, but returns a "number" data type.
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
// Creating an "instance" of the "Employee" class
var emp = new Employee(1, "Steve");
// Print the 
console.log(emp.empCode);
console.log(emp.empName);
// Class inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// The "Customer" class extends the "Person" class
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(customerCode, name) {
        var _this = _super.call(this, name) || this;
        _this.customerCode = customerCode;
        return _this;
    }
    ;
    Customer.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Customer Code = " + this.customerCode);
    };
    return Customer;
}(Person));
var customer = new Customer(100, "Bill");
customer.displayName();
