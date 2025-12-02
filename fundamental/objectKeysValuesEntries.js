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

/* 
Objects lack many methods that exist for arrays, e.g. map, filter and others.

If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
*/

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); // 8
