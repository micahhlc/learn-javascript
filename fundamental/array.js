// const arr_num = [22, 15, 5];
// const arr_str = ['t', 'e', 's', 't'];
// const users = [
//   { id: 1, name: 'John', age: 16 },
//   { id: 2, name: 'Pete', age: 20 },
//   { id: 3, name: 'Mary', age: 23 },
//   { id: 4, name: 'John', age: 30 },
// ];
// const names = 'Bilbo, Gandalf, Nazgul';
// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };
// let arr1, arr2, user, someusers, someusers_map, result, soliders;

/* 
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
The task is: find the contiguous subarray of arr with the maximal sum of items.
Write the function getMaxSubSum(arr) that will return that sum. 
*/

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
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100 
*/

console.log('-- splice() sort() slice() forEach() --');
/* splice()
use splice() to manipulate array. 
from index -1 (one step from the end)
delete 0 elements,
then insert 3 and 4
// arr.slice([start], [end]) return an new array
*/

// arr_num.splice(-1, 0, 3, 4);
// console.log(arr_num); // 1,2,3,4,5
// console.log(arr_num.sort()); // by default treat as strings utf16.
// console.log(arr_num.sort((a, b) => a - b)); // if a - b is negative, a is sorted in the front.

/* slice() form new array. 
arr1 = arr_str.slice(1, 3); // e,s (copy from 1 to 3)
arr2 = arr_str.slice(-2); // s,t (copy from -2 till the end)
console.log(arr_str, arr1, arr2); 
*/

/* forEach() work on existing array 
arr_str.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
*/

console.log('-- indexOf() includes() find()--');

/* find() 
let result = arr.find(function(item, index, array) {
if true is returned, item is returned and iteration is stopped
for falsy scenario returns undefined
});
*/

/* 
user = users.find((item) => item.id == 1);
console.log(user);
console.log(users.findIndex((user) => user.name == 'John')); // 0
console.log(users.findLastIndex((user) => user.name == 'John')); // 3
 */

console.log('-- filter() --');
/* filter() return new array 
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
}); 
*/

/* 
someusers = users.filter((item) => item.name.includes('o'));
console.log(someusers); */

console.log('-- map() for of--');
/* map() 
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
}); 
*/

/* 
someusers_map = users.map((item) => item.name.length);
console.log('someusers name.length: ' + someusers_map);
 */
// split to read a long strings into an array
/* 
arr = names.split(', ');

for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}
 */

console.log('-- reduce() --');
/*
When we need to iterate over an array – we can use forEach, for or for..of.
When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.
The function is applied to all array elements one after another and “carries on” its result to the next call.

The syntax is:
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.
*/

/* 
result = arr_num.reduce((sum, current) => sum + current, 0);
console.log(`${arr_num} is being handled through reduce() with result: ${result}`);
 */

console.log('-- Array.isArray() --');
/* 
Check if Array type
Array.isArray()
return true or false
*/

/* 
console.log('checking isArray(): ' + arr_str + ': ' + Array.isArray(arr_str));
console.log('checking isArray(): ' + users[1] + ': ' + Array.isArray(users[1]));
 */

console.log('-- examples --');
/* 

soldiers = users.filter((u) => army.canJoin(u));

console.log('soldiers.length: ' + soldiers.length); // 2
console.log('soliders age: ' + soldiers[0].age); // 20
console.log('soliders age: ' + soldiers[1].age); // 23
 */

/* 
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

console.log('-- camelize() --');
function camelize(str) {
  let arr = str.split('-');
  let newArr = [];
  let i = 0;
  arr.forEach((item, index) => {
    if (item) {
      if (index == 0) {
        newArr[i] = item;
      } else {
        newArr[i] = item[0].toUpperCase() + item.slice(1);
      }
      i++;
    }
  });
  return newArr.join('');
}

function camelize(str) {
  return (
    str
      .split('-')
      // .filter((p) => Boolean(p)) //same as .filter(Boolean)
      .map((p, i) => (i ? p[0].toUpperCase() + p.slice(1) : p)) // .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
      .join('')
  );
}

// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

console.log('-- Filter range --');
/* 
Filter range

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

function filterRange(arr, a, b) {
  let filterArr = [];
  return arr.filter((p, i) => p >= a && p <= b);
}
// arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered); // 3,1 (matching values)
// console.log(arr); // 5,3,8,1 (not modified)

/* 
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/

function filterRangeInPlace(arr, a, b) {
  arr.forEach((v, i) => {
    if (v >= a && v <= b) return;
    arr.splice(i, 1);
  });
}
function filterRangeInPlace_while(arr, a, b) {
  let i = 0;
  while (i < arr.length) {
    console.log(`i= ${i}, arr.length=${arr.length}, arr[${i}]=${arr[i]}`);
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
    else i++;
  }
}

// prefer the backward method for in-place mutation.
function filterRangeInPlace_for(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`i= ${i}, arr.length=${arr.length}, arr[${i}]=${arr[i]}`);
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
}

// arr = [5, 3, 8, 1, 6, 9, 12, 7];
// filterRangeInPlace_while(arr, 4, 9);
// console.log(arr);

// arr1 = [5, 3, 8, 1, 6, 9, 12, 7];
// filterRangeInPlace_for(arr1, 4, 9);
// console.log(arr1);

// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

console.log('-- calculator --');

class Calculator_simple {
  calculate(str) {
    return Function(`return ${str}`)();
  }
  addMethod(opr, func) {}
}

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

class Calculator_micah {
  constructor() {
    this.methods = {
      '-': (a, b) => a - b,
      '+': (a, b) => a + b,
    };
  }
  addMethod(opr, func) {
    this.methods[opr] = func;
  }
  calculate(str) {
    let arr = str.split(' ');
    const a = +arr[0];
    const opr = arr[1];
    const b = +arr[2];

    return this.methods[opr](a, b);
  }
}

/* 
a^b = c
a = c^(1/b)
b = log c / log a

b = log(c) / log(a)
b = log10(c) / log10(a)
b = log₂(c) / log₂(a)
b = ln(c) / ln(a)

a^b = c
log(a^b) = log(c)
b * log(a) = log(c)
b = log(c) / log(a)

*/

// let calc_m = new Calculator_micah();
// calc_m.addMethod('*', (a, b) => a * b);
// calc_m.addMethod('/', (a, b) => a / b);
// calc_m.addMethod('**', (a, b) => a ** b);
// calc_m.addMethod('root', (c, b) => c ** (1 / b));
// calc_m.addMethod('log', (c, a) => Math.log(c) / Math.log(a));
// console.log(calc_m.calculate('2 ** 8'));
// console.log(calc_m.calculate('256 root 8'));
// console.log(calc_m.calculate('256 log 2'));

console.log('-- map to objects --');
let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped =
  /* As we remember, there are two arrow functions: without body value => expr and with body value => {...}.
Here JavaScript would treat { as the start of function body, not the start of the object. The workaround is to wrap them in the “normal” brackets:
 */
  users.map((v, i) => ({
    fullName: v.name + ' ' + v.surname,
    id: v.id,
  }));

console.log(usersMapped);

console.log('-- sort usage by age --');
/* 
let pete = { name: 'Pete', age: 27 };
let andrew = { name: 'Andrew', age: 19 };
let bigJames = { name: 'Big James', age: 19 };
let john = { name: 'John', age: 16 };
let philip = { name: 'Philip', age: 18 };
let nathanael = { name: 'Nathanael', age: 25 };
let matthew = { name: 'Matthew', age: 25 };
let thomas = { name: 'Thomas', age: 16 };
let smallJames = { name: 'Small James', age: 17 };
let thaddaeus = { name: 'Thaddaeus', age: 18 };
let simonZealot = { name: 'Simon the Zealot', age: 24 };
let judasIscariot = { name: 'Judas Iscariot', age: 22 };

let arr = [
  pete,
  andrew,
  bigJames,
  john,
  philip,
  nathanael,
  matthew,
  thomas,
  smallJames,
  thaddaeus,
  simonZealot,
  judasIscariot,
];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
console.log(arr);
sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
console.log(arr);
 */

console.log('-- get avg age --');

// let pete = { name: 'Pete', age: 30 };
// let andrew = { name: 'Andrew', age: 20 };
// let bigJames = { name: 'Big James', age: 22 };
// let john = { name: 'John', age: 16 };
// let philip = { name: 'Philip', age: 18 };
// let nathanael = { name: 'Nathanael', age: 25 };
// let matthew = { name: 'Matthew', age: 25 };
// let thomas = { name: 'Thomas', age: 16 };
// let smallJames = { name: 'Small James', age: 17 };
// let thaddaeus = { name: 'Thaddaeus', age: 18 };
// let simonZealot = { name: 'Simon the Zealot', age: 24 };
// let judasIscariot = { name: 'Judas Iscariot', age: 22 };

// let arr = [pete, andrew, bigJames, john];

// function getAverageAge(arr) {
//   let result = arr.reduce((prevValue, current) => prevValue + current.age, 0);
//   return result / arr.length;
// }

// console.log(getAverageAge(arr)); // (30 + 20 + 22 + 16) / 4 = 22

console.log('-- create keyed object from array --');
// let users = [
//   { id: 'john', name: 'John Smith', age: 20 },
//   { id: 'ann', name: 'Ann Smith', age: 24 },
//   { id: 'pete', name: 'Pete Peterson', age: 31 },
// ];

function groupById(arr) {
  return arr.reduce((obj, v) => {
    obj[v.id] = v;
    return obj;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
