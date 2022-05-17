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
    pop() {
        if (this.length === 1) {
            this.bottom = null;
            this.top = null;
        } else {
            //go to second to last node
            const newTopNode = this.traverseToIndex(this.length - 2);
            console.log(newTopNode)
            newTopNode.next = null;
            this.top = newTopNode;
        }
        this.length--;
    }
    isEmpty() {
        return this.length === 0
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.bottom;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;

    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('Discord');
myStack.pop()
console.log(myStack);

  //Discord
  //Udemy
  //google