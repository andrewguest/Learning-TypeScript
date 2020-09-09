var x = 10, y = 20;
if (x > y) {
    console.log("x is greater than y");
}
else if (x < y) {
    console.log("x is less than y");
}
else {
    console.log("x is equal to y");
}
// Ternary operator
// Boolean expression? First statement : second statement
// x > y ?  is the boolean expression or what we're check is TRUE
// console.log('x is greater than y.')  is what will be executed if TRUE
// console.log('x is less than or equal to y.')  is what will be executed if FALSE
x > y ? console.log('x is greater than y.') : console.log('x is less than or equal to y.');
