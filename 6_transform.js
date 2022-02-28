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