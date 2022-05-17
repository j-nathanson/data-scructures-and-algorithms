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
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        // return null because stack is already empty
        if (!this.top) {
            return null;
        }
        // for last bottom node in stack
        if (this.length === 1) {
            this.bottom = null;
        }
        //an option is to still save old top node
        // const holdingPointer = this.top 
        this.top = this.top.next; //initialize to null
        this.length--;
        return this;

        // could return this value if we want to use later
        // return holdingPointer
    }
    isEmpty() {
        return this.length === 0;
    }
}


const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('Discord');
myStack.pop()
console.log(myStack.peek())
console.log(myStack);

  //Discord
  //Udemy
  //google