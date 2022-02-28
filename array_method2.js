/* *************************************
        ARRAY SLICE
*************************************** */

// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:

// arr.slice([start], [end])

// It returns a new array copying to it all items from index start to end (not including end). Both start 
// and end can be negative, in that case position from array end is assumed.

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

// let months = ["January", "February", "Monday", "Tuesday"];
// let days = months.splice(2, 2, "March", "April");

// console.log(days); // ["Monday", "Tuesday"]
// console.log(months); // ["January", "February", "March", "April"]

// Remove the array from monts and replace it with "March", "April"

// Delete 
// let languages = ['C', 'C++', 'Java', 'JavaScript'];
// languages.splice(1, 1, 'Python');
// console.log(languages); 
// ["C", "Python", "Java", "JavaScript"]



/* *************************************
        ARRAY Concat
*************************************** */

// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:

// arr.concat(arg1, arg2...)

// If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

// For instance:
// let arr = [1, 2];

// create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:
// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

// …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an 
// array by concat: its elements are added instead:

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // 1,2,something,else