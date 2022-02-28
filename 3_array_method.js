/* *************************************
        ARRAY METHODS
*************************************** */

// Add and Remove Elements

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// SPLICE

// let arr = ["I", "go", "home"];

// delete arr[1];
// console.log(arr[1]); // undefined
// console.log(arr.length); // 3
// console.log(arr); 

// the delete remove the element from the array but it does not change the length of the array
// We have <1 empty item> in the array, That’s natural, because delete obj.key removes a value by the key

// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
// Syntax =  arr.splice(start[, deleteCount, elem1, ..., elemN])

// let arr = ["I", "study", "JavaScript"];
// arr.splice(1,1); // remove the element at index 1
// console.log(arr); // ["I", "JavaScript"]

// In the next example we remove 3 elements and replace them with the other two:

// let arr = ["I", "study", "JavaScript", "right", "now"]; 
// remove 3 first elements and replace them with another
// remove "I", "study" and "JavaScript"
// arr.splice(0, 3, "Let's", "dance"); 
// console.log(arr); // ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:
// let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
// let removed = arr.splice(0, 2);

// console.log( removed ); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set 
// deleteCount to 0:

// let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0, shift "JavaScript" forward and add the new elements
// then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log( arr ); // "I", "study", "complex", "language", "JavaScript"

// negative allowed

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log( arr ); // 1,2,3,4,5