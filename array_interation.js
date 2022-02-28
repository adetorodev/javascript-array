/*
A common operation on array in iteration. You will need this everyday in your career
 */

let colors = ['red', 'green', 'blue']

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
  }
/*
In the for-loop we create variable i, and i is less than colors.length and increase i
 */

// forEach method provide another way to iterate over array

// colors.forEach(function(color) {
//     console.log(color);
// }

colors.forEach(color => console.log(color))
