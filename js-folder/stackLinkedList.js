class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.bottom = newNode;
        } else {
            this.top.next = newNode;
        }
        //update top no matter the case
        this.top = newNode;
        this.length++;

    }
    pop() {//remove the top
    }
    isEmpty() {
        return this.length === 0
    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('Discord');
console.log(myStack);

  //Discord
  //Udemy
  //google