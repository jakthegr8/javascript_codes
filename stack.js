class Stack {
  constructor() { this.data = []; }
  add(ele) { this.data.push(ele); }
  remove() { this.data.pop(); }
  print() { console.log(this.data); }
}

let stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
stack.print();
stack.remove()
stack.print();
