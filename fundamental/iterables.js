let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    let sum = 0;
    let index = 0;

    return {
      next() {
        if (current <= range.to) {
          sum += current;
          current++;
          index++;

          return {
            done: false,
            value: {
              index,
              val: sum,
            },
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let range_a = {
  from: 1,
  to: 5,
  sum: 0,
  index: 0,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      this.sum += this.current;
      this.current++;
      this.index++;
      return {
        done: false,
        value: {
          index: this.index,
          val: this.sum,
        },
      };
    } else {
      return { done: true };
    }
  },
};

console.log('range');
for (let item of range) {
}
console.log(range_a.sum, range_a.index);
console.log(range.to);
for (let item of range) {
}
console.log(range_a.sum, range_a.index);

console.log('range_a');
for (let v of range_a) {
}
console.log(range_a.sum, range_a.index);
console.log(range_a.to);
for (let v of range_a) {
}
console.log(range_a.sum, range_a.index);
console.log(range_a.to);
for (let v of range_a) {
  console.log(v.index, v.val);
}

/* 
object range reset the iterator properly. 
object range_a reuse sum and index. 
*/

/* 
There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.
*/

let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)
