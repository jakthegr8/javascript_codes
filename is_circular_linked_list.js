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

  makeCircular(){
    let lastNode = this.getLast();
    lastNode.next = this.head;
  }

  isCircular() {
    let oneStepNode = this.head;
    let doubleStepNode = this.head;
    while(doubleStepNode.next && doubleStepNode.next.next) {
      oneStepNode = oneStepNode.next;
      doubleStepNode = doubleStepNode.next.next;
      if(oneStepNode === doubleStepNode) {
        return true;
      }
    }
    return false;
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
console.log(ll1.isCircular());

let ll2 = new LinkedList();
ll2.insertFirst(1);
ll2.insertFirst(2);
ll2.makeCircular();
console.log(ll2);
console.log(ll2.isCircular);
