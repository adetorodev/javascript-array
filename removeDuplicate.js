let arr = [2, 4, 5, 2, 6, 7, 3, 5]

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};


// function removeDuplicates(array) {
//     return (
//         array.filter((item, currentIndex) => {
//             let firstFoundIndex = array.indexOf(item);
//             return firstFoundIndex === currentIndex;
//         })
//     );
// }

// console.log(removeDuplicates(arr))

// indexOf() always finds FIRST element that fulfills the condition

// Create a function unique(arr) that should return an array with unique items of arr.

// function unique(array) {
//     return (
//         array.filter((item, currentIndex) => {
//             let firstFoundIndex = array.indexOf(item);
//             return firstFoundIndex === currentIndex;
//         })
//     );
// }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(removeDuplicates(strings)); // Hare, Krishna, :-O