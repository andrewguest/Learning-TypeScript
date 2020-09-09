// The for loop is used to execute a block of code a given number of times, which is specified by a condition.
var arr1 = [10, 20, 30, 40];
// for...of loop
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var val = arr1_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
// for...in loop
var arr2 = [10, 20, 30, 40];
for (var index in arr2) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr2[index]); // prints elements: 10, 20, 30, 40
}
