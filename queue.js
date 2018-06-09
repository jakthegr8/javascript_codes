class Queue {
  constructor() { this.data = []; }
  add(ele) { this.data.unshift(ele); }
  remove() { this.data.pop(); }
  print() { console.log(this.data);}
}

let q = new Queue();

q.add(1);
q.add(2);
q.add(3);
q.print();
q.remove()
q.print();
