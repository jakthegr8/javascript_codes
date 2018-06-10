class Node {
  constructor(data) {
    this.data = data
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value))
  }

  remove(value) {
    this.children = this.children.filter(ele => { return ele.data !== value });
  }
}

class Tree {
  constructor(root=null) {
    this.root = root
  }

  traverseDF() {
    let arr = [this.root];
    while (arr.length) {
      let firstNode = arr.shift();
      console.log(firstNode.data);
      arr.unshift(...firstNode.children)
    }
  }
}

let node = new Node(1);
node.add(2);
node.add(3);
node.children[0].add(4)
node.children[0].add(5)
node.children[1].add(6)
node.children[1].add(7)

let tree = new Tree(node);
tree.traverseDF()
