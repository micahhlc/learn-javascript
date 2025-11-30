/* 
ref: https://javascript.info/keys-values-entries

*/

/* 
Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/

let user = {
  name: 'John',
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (let [key, value] of Object.entries(user)) {
  console.log(key + ': ' + value); // John, then 30
}

let map = new Map(Object.entries(user));
console.log(map);
