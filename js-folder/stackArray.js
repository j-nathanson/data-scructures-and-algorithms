class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        const lastIndex = this.array.length - 1;
        return this.array[lastIndex];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop()
console.log(myStack);