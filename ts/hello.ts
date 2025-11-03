// TypeScript Code

const reference: string = 'https://www.programiz.com/typescript/data-types';
console.log(reference);

// Declare a number variable
// let age: number = 20;

// Assign a string data to age variable
// Error: this is an invalid code
// age = 'Twenty';

// Declare string variable userName and number variable age
// Assign values "John" and 20 respectively

// Create an array of numbers
let quantities: number[] = [1, 2, 3, 4, 5];
console.log(quantities);

// Output: [1, 2, 3, 4, 5]

let colors: string[] = ['red', 'blue', 'green', 'yellow'];
console.log(colors);

// Output: [ 'red', 'blue', 'green', 'yellow' ]

let person: { name: string; birthday: number[]; hobbies: string[] } = {
  name: 'John',
  birthday: [2000, 12, 31],
  hobbies: ['reading', 'cycling'],
};
// person.name = 12;

console.log(person);

// better to use interface.
// better to use class.
type Person = {
  fName: string;
  lName: string;
  birthday: [number, number, number]; // Year, Month, Day
  hobbies: string[];
  age?: number; // Getter will simulate this
  email?: string;
  getFullName(): string;
};

const testUserA: Person = {
  fName: 'michael',
  lName: 'jordan',
  birthday: [1980, 12, 31],
  hobbies: ['sleep', 'eat'],
  email: 'm@line.com',
};

console.log(testUserA);
