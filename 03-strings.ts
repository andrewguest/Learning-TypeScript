let employeeName: string = 'John Smith';
let employeeDept: string = "Finance";

// Concating strings together in TypeScript
// ${}  will replace the provided variable with it's value
let employeeDesc: string = `${employeeName} works in the ${employeeDept} department`

console.log(employeeDesc)