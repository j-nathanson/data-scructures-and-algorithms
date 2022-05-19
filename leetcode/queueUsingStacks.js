// stack using array

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
        const popped = this.array.pop();
        return popped;
    }

    empty() {
        return this.array.length === 0;
    }
}

class MyQueue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    peek() {
        return this.s1.peek();
    }

    empty() {
        return this.s1.empty();
    }

    push(value) {
        if (this.empty()) {
            this.s1.push(value)
        } else {
            while (!this.empty()) {
                const holder = this.s1.pop();
                console.log(holder)
                this.s2.push(holder);
            }
            this.s1.push(value)

            while (!this.s2.empty()) {
                const holder = this.s2.pop();
                console.log(holder)
                this.s1.push(holder)
            }
        }
    }

    pop() {
        return this.s1.pop()
    }
}

class MyQueue2 {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    peek() {
        const lastIndex = this.s1.length - 1;
        return this.s1[lastIndex];
    }

    empty() {
        return this.s1.length === 0;
    }

    push(value) {
        if (this.empty()) {
            this.s1.push(value)
        } else {
            while (!this.empty()) {
                const holder = this.s1.pop();
                this.s2.push(holder);
            }
            this.s1.push(value);

            while (this.s2.length !== 0) {
                const holder = this.s2.pop();
                this.s1.push(holder);
            }
        }
    }

    pop() {
        return this.s1.pop();
    }
}

// const queue = new MyQueue();
// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.pop()
// console.log(queue)

const myQueue = new MyQueue2();
myQueue.push(1); // queue is: [1]
console.log(myQueue)
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false