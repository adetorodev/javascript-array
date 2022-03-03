/* *************************************
        Transform an array
*************************************** */

// Let’s move on to methods that transform and reorder an array.

// map
// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// console.log(lengths)

// let arr = [1, 2, 3, 4, 5];

// let modifiArr = arr.map(item => item * 2);
// console.log(modifiArr)

// let users = [
//     { firstName: "Susan", lastName: "Steward" },
//     { firstName: "Daniel", lastName: "Longbottom" },
//     { firstName: "Jacob", lastName: "Black" }
// ];

// let userFullnames = users.map(function (item) {
//     return `${item.firstName} ${item.lastName}`;
// })

// console.log(userFullnames);

// let arr = [2, 3, 5, 7]

// arr.map(function (element, index, array) {
//     console.log(this) // 80
// }, 80);

// arr.map(function (element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }, 80);

// sort(fn)
// The call to arr.sort() sorts the array in place, changing its element order.
// let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
// arr.sort();
// The items are sorted as strings by default.
// console.log( arr );  // 1, 15, 2

// To use our own sorting order, we need to supply a function as the argument of arr.sort().

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15];

// arr.sort(compareNumeric);

// console.log(arr);  // 1, 2, 15

/*
Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.
*/

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
  });

  let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)