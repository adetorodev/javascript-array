/* *************************************
        Transform an array B
*************************************** */

// reverse
// The method arr.reverse reverses the order of elements in arr.
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1

// split and join
// Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

// The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)