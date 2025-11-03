/* using OR to determine like an if. 
Short-circuit evaluation.

ref: https://javascript.info/logical-operators

true || alert("not printed");
false || alert("printed");
*/

console.log('' || null || undefined || 1 || 'no matter what this field will not be checked.'); //1 is returned

console.log(console.log(1) || 2 || console.log(3));

/* AND “&&” finds the first falsy value
AND returns the first falsy value or the last value if none were found.

result = value1 && value2 && value3;

The rules above are similar to OR. The difference is that AND returns the first falsy value 
while OR returns the first truthy one.
 */

console.log(1 && 2 && true && null && 'no matter what this field will not be checked.'); //null is returned.

/* double NOT  */
console.log(!!1);
console.log(Boolean(1));
// the above is the same.
// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

// real world use case.
const user = { isAdmin: true, name: 'Micah', settings: null, defaultSettings: 'defined something', isLoggedIn: true };

const config = user.settings || user.defaultSettings;
const message = user.isLoggedIn && `Welcome ${user.name || 'Guest'}!`;
console.log(config);
console.log(message);

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert('first');

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert('second');

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert('third');
