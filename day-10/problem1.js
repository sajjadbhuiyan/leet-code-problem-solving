/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
/* var getDecimalValue = function (head) {
  let sumOfValue = "";
  while (head.next !== null) {
    sumOfValue += head.val;
    head.next.next;
  }
  return parseInt(sumOfValue, 2);
}; */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  getDecimalValue = function () {
    let current = this.head;
    let sum = "";
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return parseInt(sum, 2);
  };
}

const list = new LinkedList();
list.add(1);
list.add(0);
list.add(1);

console.log(list.getDecimalValue());
