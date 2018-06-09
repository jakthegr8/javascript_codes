class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0;
    let lastNode = this.head;
    while(lastNode) {
      lastNode = lastNode.next;
      count++
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    while(lastNode) {
      if(!lastNode.next) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
  }

  deleteAll() {
    this.head = null;
  }

  removeFirst() {
    if(this.head) {
      this.head = this.head.next
    }
  }

  removeLast() {
    let lastNode = this.head;
    while(lastNode) {
      if(!lastNode.next.next) {
        return lastNode.next = null;
      }
      lastNode = lastNode.next;
    }
  }
}

let ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
console.log(ll.size());
console.log(ll.getFirst());
console.log(ll.getLast());
ll.deleteAll();
console.log(ll.size());
ll.insertFirst(4);
ll.insertFirst(5);
ll.insertFirst(6);
console.log(ll.size());
console.log(ll.getFirst());
ll.removeFirst();
console.log(ll.getFirst());
console.log(ll.size());
console.log(ll.getLast());
ll.removeLast();
console.log(ll.getLast());
console.log(ll.size());
