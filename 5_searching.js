/* *************************************
        ARRAY SEACHING
*************************************** */

// indexOf/lastIndexOf and includes
// The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the 
// same as their string counterparts, but operate on items instead of characters:

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was 
// found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true

// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
// console.log( arr.includes(NaN) );// true (correct)

// Imagine we have an array of objects. How do we find an object with the specific condition?

// Here the arr.find(fn) method comes in handy.

// let result = arr.find(function(item, index, array) {
//         if true is returned, item is returned and iteration is stopped
//         for falsy scenario returns undefined
//       });

// The function is called for elements of the array, one after another:

// item is the element.
// index is its index.
// array is the array itself.

// let users = [
//         { id: 1, name: "John" },
//         { id: 2, name: "Pete" },
//         { id: 3, name: "Mary" }
// ];

// let user = users.find(item => item.id == 1);

// console.log(user.name); // John

// let users = [
//         { id: 1, name: "John" },
//         { id: 2, name: "Pete" },
//         { id: 3, name: "Mary" }
// ];

// let user = users.find(item => item.id == 3);

// console.log(user.name); // John

// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

// The syntax is similar to find, but filter returns an array of all matching elements:

// let results = arr.filter(function(item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });

let users = [
        { id: 1, name: "John" },
        { id: 2, name: "Pete" },
        { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2
console.log(someUsers); 