/* The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum. */

function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
    console.log('first fn: ');
  }
  return maxSum;
}

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  console.log('second fn: ');
  return maxSum;
}
/* 
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100 */
/* 
let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
console.log(arr, arr.length);
// remove 3 first elements and replace them with another
arr.splice(1, 1, 'really', 'am', 'studying');

console.log(arr, arr.length); // now ["Let's", "dance", "right", "now"]
 */
const arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

// arr.slice([start], [end]) return an new array
arr = ['t', 'e', 's', 't'];
let arr1 = arr.slice(1, 3); // e,s (copy from 1 to 3)
let arr2 = arr.slice(-2); // s,t (copy from -2 till the end)
console.log(arr, arr1, arr2);

arr.forEach(console.log);
arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

console.log(arr.indexOf('s'));
console.log(arr.includes('s'));

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'John' },
];

// let result = arr.find(function(item, index, array) {
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
// });
let user = users.find((item) => item.id == 1);
console.log(user);
console.log(users.findIndex((user) => user.name == 'John')); // 0
console.log(users.findLastIndex((user) => user.name == 'John')); // 3

/* let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
}); */

let someusers = users.filter((item) => item.name.includes('o'));
console.log(someusers);

/* let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
}); */

let someusers_map = users.map((item) => item.name.length);
console.log(someusers_map);
