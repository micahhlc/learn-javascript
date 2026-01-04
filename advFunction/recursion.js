/* 
ref: https://javascript.info/recursion

For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

*/

/* 
Using for loop
*/

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
    console.log(`i: ${i} result: ${result}`)
  }

  return result;
}
console.log(pow(2, 3)); // 8

function pow_recursion(x, n) {
  if (n == 1)
    return x
  else {
    console.log(`x: ${x} n: ${n}`)
    return x * pow_recursion(x, n - 1)
  }

}
console.log(pow_recursion(2, 4)); // 8

function pow_recursion_short(x, n) {
  return (n == 1) ? x : x * pow_recursion_short(x, n - 1)
}
console.log(pow_recursion_short(2, 5))


/* 
Explain

Phase 1: Going "Down" the Rabbit Hole (Building the Call Stack)
The computer doesn't see loops; it sees a chain of function calls, each one pausing and waiting for the next one.

Call #1:

pow_recursion_short(2, 4) is called.
Computer thinks: "Is n (which is 4) equal to 1?" -> No.
"Okay, so I must execute the part after the colon :."
"I need to return 2 * pow_recursion_short(2, 3)."
"But I don't know what pow_recursion_short(2, 3) is yet. I have to call that function and wait for its answer."
Action: Call pow_recursion_short(2, 3) and PAUSE Call #1.
Call #2 (indented to show it's "inside" Call #1):

pow_recursion_short(2, 3) is called.
Computer thinks: "Is n (which is 3) equal to 1?" -> No.
"Okay, so I need to return 2 * pow_recursion_short(2, 2)."
"I don't know what pow_recursion_short(2, 2) is. I must call it and wait."
Action: Call pow_recursion_short(2, 2) and PAUSE Call #2.
Call #3 (further indented):

pow_recursion_short(2, 2) is called.
Computer thinks: "Is n (which is 2) equal to 1?" -> No.
"Okay, I need to return 2 * pow_recursion_short(2, 1)."
"I don't know what pow_recursion_short(2, 1) is. I must call it and wait."
Action: Call pow_recursion_short(2, 1) and PAUSE Call #3.
Call #4 (deepest level):

pow_recursion_short(2, 1) is called.
Computer thinks: "Is n (which is 1) equal to 1?" -> YES!
"This is the Base Case. The condition is true, so I execute the part after the ?."
"I will return x (which is 2)."
Action: This function is finished. It returns the value 2 to whoever called it (which was the paused Call #3).
Phase 2: Coming "Up" for Air (Unwinding the Call Stack)
Now the chain reaction happens in reverse.

Resuming Call #3:

Call #3 was paused, waiting for the result of pow_recursion_short(2, 1).
Computer thinks: "Great, I got the answer! It's 2."
"My job was to return 2 * [the answer I just got]."
"So, I will return 2 * 2, which is 4."
Action: This function is finished. It returns the value 4 to whoever called it (the paused Call #2).
Resuming Call #2:

Call #2 was paused, waiting for the result of pow_recursion_short(2, 2).
Computer thinks: "Excellent, I have the answer. It's 4."
"My job was to return 2 * [the answer I just got]."
"So, I will return 2 * 4, which is 8."
Action: This function is finished. It returns the value 8 to whoever called it (the paused Call #1).
Resuming Call #1 (The original call):

Call #1 was paused, waiting for the result of pow_recursion_short(2, 3).
Computer thinks: "Finally, I got the answer. It's 8."
"My job was to return 2 * [the answer I just got]."
"So, I will return 2 * 8, which is 16."
Action: This function is finished. It returns the value 16 to the original code that started this whole process.
Final Result: 16

*/

/* 
Recursion is good for unstructured objects that cannot use for loop.

In order to get all salary of the object, there are two possible cases:
1. it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.
2. it’s an object with N subdepartments – then we can make N recursive calls to get the sum for each of the subdeps and combine the results.

Note that the code uses smart features that we’ve covered before:

Method arr.reduce explained in the chapter Array methods to get the sum of the array.
Loop for(val of Object.values(obj)) to iterate over object values: Object.values returns an array of them.

*/


let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700