/* 
A Map is a key–value store like an Object, but with superpowers:
Keys retain order (insertion order)
Iteration is easy and fast
Size is easy: map.size
*/

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let item of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(item); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

/* 
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/
let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits, some users come multiple times
console.log(set.add(john)); //Set(1) { { name: 'John' } }
console.log(set.add(pete)); //Set(2) { { name: 'John' }, { name: 'Pete' } }
console.log(set.add(mary)); //Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
console.log(set.add(john)); //Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
console.log(set.add(mary)); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

let set1 = new Set(['oranges', 'apples', 'bananas']);

for (let value of set1) console.log(value);

// the same with forEach:

set1.forEach((value, valueAgain, set1) => {
  /* 
Sets do not have an “index”.
So to keep the API the same shape,
JavaScript designers used:
*/
  console.log(value);
  console.log(set1);
});

/* Convert Object to Map */
map = new Map(Object.entries(john));
console.log(map);
