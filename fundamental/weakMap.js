/* 
if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

ref: https://javascript.info/weakmap-weakset

*/

john = { name: 'John' };
let array = [john];
john = null; // overwrite the reference
console.log(john);
console.log(array[0]);

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

/* WeakArray WeakMap prevent garbage collection to function properly. */

john = { name: 'John' };
let map = new Map();
map.set(john, '...');
john = null; // overwrite the reference
console.log(john);
console.log(map.get(john));
console.log(map);
map.clear();
console.log(map);

// john is stored inside the map,
// we can get it by using map.keys()

// using WeakMap()

john = { name: 'John' };
let weakMap = new WeakMap();
weakMap.set(john, '...');
console.log(weakMap);
// john = null; // overwrite the reference
// console.log(weakMap);
// john is removed from memory!

/* The main area of application for WeakMap is an additional data storage.

If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.
 */

weakMap.set(john, 'secret documents');
// if john dies, secret documents will be destroyed automatically

// another example

let wm = new WeakMap();

let obj = { name: 'Micah' };
wm.set(obj, 'some data');

console.log(wm.get(obj));
obj = null;

/* 
Then JavaScript may delete the WeakMap entry automatically
(but not immediately — whenever the garbage collector runs).
 */
console.log(wm.get(obj));

/* 
Do you need to manually clean WeakMap?

No.
WeakMap entries remove themselves automatically when:
	1.	The key object becomes unreachable
	2.	Garbage collector runs

*/
