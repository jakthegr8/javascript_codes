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

  fromLast(n) {
    let pointerOne = this.head;
    let pointerTwo = this.head;
    let counter = 1;

    while(counter <= n) {
      pointerTwo = pointerTwo.next;
      counter++;
    }

    while(pointerTwo.next) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    }
    return pointerOne;
  }
}

let ll1 = new LinkedList();
ll1.insertFirst(1);
ll1.insertFirst(2);
ll1.insertFirst(3);
ll1.insertFirst(4);
ll1.insertFirst(5);
ll1.insertFirst(6);
console.log(ll1);
console.log('======Mid=======');
console.log(ll1.fromLast(2).data);
console.log(ll1.fromLast(4).data);
