// Let us create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// To run the code use node array_introduction.js in the terminal

// let get items from the array. We simply need to use the index of the array
/* How to get the array index 
    1  2  3  4  5  6  7  8  9  10
    0  1  2  3  4  5  6  7  8  9
*/
// We can get the first item in the array by using the index 0
console.log(numbers[0]);
// We can get the last item in the array by using the index 9
console.log(numbers[9]);
// We can get the middle item in the array by using the index 4
console.log(numbers[4]);

// Let us check for the number of items in the array
console.log(numbers.length);

// Let creat an array of strings
let names = ["John", "Jane", "Mary", "Mark", "Bob"];
console.log(names);

// We can get the first item in the array by using the index 0
console.log(names[0]);
// We can get the last item in the array by using the index 4
console.log(names[4]);

let arr1 = [10]       // Creates an array with only one element:
                     // the number 10.

let arr2 = Array(12)  // Creates an array with no elements
                     // and arr.length set to 12. This is equivalent to:
let arr = []
arr.length = 11

arr[0] = 'Casey Jones' // Add the first element to the array
arr[1] = 'Phil Lesh'   // Add another element to the array
arr[2] = 'August West'

console.log(arr)