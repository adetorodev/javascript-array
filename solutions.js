// 1
//  function filterRange(arr, a,b){
//     return arr.filter(item => item >= a && item <= b);
//  }

//  let arr = [5, 3, 2, 8, 1]; //[5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr)

// 2
// function filterRangeInPlace(arr, a, b){
//       for (let i = 0; i < arr.length; i++){
//          if (arr[i] < a || arr[i] > b){
//                arr.splice(i, 1);
//                i--;
//          }
//       }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);
// console.log(arr)

// 3
// let arr = [5, 2, 1, -10, 8];

// function sortAb(a, b) {
//       return b - a;
// }
// arr.sort(sortAb);

// console.log( arr ); // 8, 5, 2, 1, -10

// 4

// function copySorted(arr){
//        return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted)
// console.log(arr)