/* *************************************
        Transform an array B
*************************************** */

// reverse
// The method arr.reverse reverses the order of elements in arr.
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log( arr ); // 5,4,3,2,1

// split and join
// Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

// The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.
// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `A message to ${name}.` );
// }

// let str = "test";

// alert( str.split('') ); // t,e,s,t

// reduce/reduceRight
// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

// The syntax is:

// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);