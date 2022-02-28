/*
A common operation on array in iteration. You will need this everyday in your career
 */

// let colors = ['red', 'green', 'blue']

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
//   }
/*
In the for-loop we create variable i, and i is less than colors.length and increase i
 */

// forEach method provide another way to iterate over array

// colors.forEach(function(color) {
//     console.log(color);
// }

// colors.forEach(color => console.log(color))


// Unassigned values 

// let array = ['first', 'second', , 'fourth']

// array.forEach(function(element) {
//     console.log(element)
//   })

  //  Unassigned values are not iterated in a forEach loop.

//   The arr.forEach method allows to run a function for every element of the array.

// The syntax:

// arr.forEach(function(item, index, array) {
//   // ... do something with item
// });

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });