class Stack {
  constructor(size = 5) {
    this.stack = [];
    this.size = size;
  }

  push(value) {
    if (this.IsFull()) {
      return "stack is full!";
    }

    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  IsFull() {
    if (this.stack.length === this.size) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (!this.stack.length) {
      return true;
    }
    return false;
  }

  log() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6); // stack is full!
stack.push(7); // stack is full!

stack.log(); // [ 1, 2, 3, 4, 5 ]

stack.pop(); // 5
stack.pop(); // 4
stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // Stack is empty

stack.log(); // []
