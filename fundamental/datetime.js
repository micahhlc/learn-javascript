/* 
ref: https://javascript.info/date

*/

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

// console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
// console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');

console.log('Total time for diffSubtract: ' + time1);
console.log('Total time for diffGetTime: ' + time2);

/* 
Explanation

new Date(0)

Creates a Date whose internal timestamp is 0 milliseconds since the Unix epoch.
Unix epoch = 1970-01-01T00:00:00.000Z (UTC).
In local time zones, toString() will show the equivalent local date-time, which may be Dec 31, 1969 if you’re behind UTC.
new Date()

Creates a Date with the current moment when the constructor runs.
Its millisecond value is Date.now() at that instant.
*/
