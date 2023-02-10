class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let node = new Node(data); // 1
    node.next = this.top; // null
    this.top = node;
  }

  pop() {
    if (this.top === null) return "Underflow";
    let item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  peek() {
    if (this.top === null) return null;
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
