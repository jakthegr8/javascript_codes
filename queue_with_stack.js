class Stack {
    constructor() {
        this.data = [];
    }
    add(ele) {
        this.data.push(ele);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    print() {
        console.log(this.data);
    }
}

class Queue {
    constructor() {
        this.data = new Stack();
        this.tempData = new Stack();
    }
    add(ele) {
        this.data.add(ele)
    }
    remove() {
        while (this.data.peek()) {
            this.tempData.add(this.data.remove())
        }
        this.tempData.remove()
        while (this.tempData.peek()) {
            this.data.add(this.tempData.remove())
        }
    }
    print() {
        console.log(this.data);
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.print();
q.remove();
q.print();
q.add(4);
q.print();
q.remove();
q.print();
