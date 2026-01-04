/* 
ref: https://javascript.info/recursion#linked-list
*/


class LinkedList {  //without tail
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) { //This loop, as long as there is a next node, move forward.”
      current = current.next;
    }
    current.next = node;
  }

  forEach(fn) {
    let cur = this.head;
    while (cur) {
      fn(cur);
      cur = cur.next;
    }
  }
}

class LinkedListwTail {  //with tail
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop() {

  }

  forEach(fn) {
    let cur = this.head;
    while (cur) {
      fn(cur);
      cur = cur.next;
    }
  }
}


let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(50);

let listwTail = new LinkedListwTail();
listwTail.add(10);
listwTail.add(20);
listwTail.add(30);
listwTail.add(40);
listwTail.add(50);


// Walk through (iterate) the list and print values

console.log('-- LinkedList without Tail --')
list.forEach(v => console.log(v.value, v.next));
console.log('\n\n');
console.log('-- LinkedList with Tail --')
listwTail.forEach(v => console.log(v.value, v.next));
console.log(`LinkedListwTail.length: ${listwTail.length}`);


