class LinkedList {
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
      fn(cur.value);
      cur = cur.next;
    }
  }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(50);

// Walk through (iterate) the list and print values
let cur = list.head;
while (cur) {
  console.log(cur.value);
  cur = cur.next;
}