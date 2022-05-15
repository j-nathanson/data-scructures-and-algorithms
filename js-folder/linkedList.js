// 10-->5-->16

// basic linked list
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // create first linked list node
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        // size 1, so head is the tail
        this.tail = this.head;

        // optional keep track of length
        this.length = 1;
    }

    // add at the end of linked list
    append(value) {
        // const newNode = {
        //   value: value,
        //   next: null
        // };

        // use class to not repeat code
        const newNode = new Node(value);

        // whereever the tail is currently reference to newNode

        this.tail.next = newNode;

        // update tail to reference the newNode, new last item
        this.tail = newNode;
        this.length++;

        return this;
    }

    // add value to the beginning of the list
    prepend(value) {
        //ressaign head with the values of the past head node, no need to have to shift indexes
        // my soultion
        // this.head = { value: value, next: this.head };
        // this.length++;

        // ztm solution
        // create node
        const newNode = {
            value: value,
            next: null
        };

        // change the nodes next propery to point to the previous head
        newNode.next = this.head;
        // update the classes head property to point to the new node
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }

        // if index is 0
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        // set previous node to start at the head
        let previousNode = this.head;

        // update previousNode to the index before our target index
        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        // find the node after our target index
        const afterNode = previousNode.next;

        // create a new node, and update it's next property to link to afterNode
        const newNode = new Node(value);
        newNode.next = afterNode;

        //link previous node to the current node
        previousNode.next = newNode;

        this.length++;

        return this.printList();
    }

    insert2(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }

        // if index is 0
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value);

        // find previous node from target index
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        // check params

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else if (index >= this.length - 1) {
            const currentNode = this.traverseToIndex(this.length - 2);
            currentNode.next = null;
            this.tail = currentNode;
        } else {
            const previousNode = this.traverseToIndex(index - 1);
            previousNode.next = previousNode.next.next;
        }

        this.length--;
        return this.printList();
    }

    remove2(index) {
        // check params
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);

// 11,1,10,5,16
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.prepend(11);
myLinkedList.insert2(3, 99);
myLinkedList.remove(6);
console.log(myLinkedList.printList());
console.log(myLinkedList);
