/* 
ref: https://javascript.info/json

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
*/

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

let json = JSON.stringify(student);

// console.log(typeof json); // we've got a string!
// console.log(json);

// ----

/* 
The full syntax of JSON.stringify is:
let json = JSON.stringify(value[, replacer, space])
*/

/* 
Circular reference is not allowed in JSON.stringify. 
It can be removed through a replacer function. 

space is used for adding space for easier formatting only. 
*/

let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == 'occupiedBy' ? undefined : value; //remove occupiedBy the circular referencing.
  })
);

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

/* 
The JSON may be as complex as necessary, objects and arrays can include other objects and arrays. But they must obey the same JSON format.
Here are typical mistakes in hand-written JSON (sometimes we have to write it for debugging purposes):
*/

let json_example1 = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;

/* 
The value of meetup.date is a string, not a Date object. 
Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:
*/

// example 1
/* 
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // Error! 
*/

// example 2
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup1 = JSON.parse(str, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

// console.log(meetup1.date.getFullYear().getMonth().getDate()); // now works!

console.log(
  meetup1.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
