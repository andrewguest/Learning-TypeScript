// To define an 'array' (or 'list') you should declare the type
//  of data that will be contained IN the array followed by square brackets []

// Here we define an array containing "string"s
let fruits: string[] = ['Apple', 'Banana', 'Orange']

// Here we define an array containing "number"s
let favNumbers: number[] = [3, 69, 100]

// You CAN define an array without declaring the data types it will contain.
//   Be aware, this can cause issues when you start manipulating the data.
let randomData = [1, 2, 'Cat', 'Dog', true, false]


// for each item in the "fruits" array
for (var item in fruits) {
    // print each "item"
    console.log(fruits[item]);
}