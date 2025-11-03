function powerLoop(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/*
Illustrate how recursive work. 
Recursive is considered less efficient 

power(2, 3)
→ 2 * power(2, 2)
→ 2 * (2 * power(2, 1))
→ 2 * (2 * (2 * power(2, 0)))
→ 2 * (2 * (2 * 1)) = 8
*/
function powerRecursive(x, n) {
  if (n === 0) return 1;
  return x * powerRecursive(x, n - 1);
}

function powerOperator(x, n) {
  return x ** n;
}

// Test values
const x = 4;
const n = 100000; // large enough to show timing differences
console.log(x + ' ** ' + n);

// Loop
console.time('Loop');
powerLoop(x, n);
console.timeEnd('Loop');

// Recursive
console.time('Recursive');
try {
  powerRecursive(x, n);
} catch (e) {
  console.log('Recursive version failed:', e.message);
}
console.timeEnd('Recursive');

// Operator
console.time('Operator');
powerOperator(x, n);
console.timeEnd('Operator');
