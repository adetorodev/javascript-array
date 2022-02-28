/* *************************************
        ARRAY SLICE
*************************************** */

// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:

// arr.slice([start], [end])

// It returns a new array copying to it all items from index start to end (not including end). Both start 
// and end can be negative, in that case position from array end is assumed.

let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)