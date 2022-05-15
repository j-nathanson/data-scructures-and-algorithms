class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    createNewNode(value) {
        return {
            value: value,
            next: null,
            prev: null
        };
    }

    // add nonde to the last node
    append(value) {
        const newNode = this.createNewNode(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    // add before head node
    prepend(value) {
        const newNode = this.createNewNode(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {

        // add to beginning
        //add to end
        // add too middle
        if (index === 0) {
            this.prepend(value)
        }
        else if (index >= this.length - 1) {
            this.append(value)
        } else {
            // find/create nodes
            const newNode = this.createNewNode(value);
            const previousNode = this.traverseToIndex(index - 1);
            const afterNode = this.traverseToIndex(index);

            // connect newNode to LL
            newNode.prev = previousNode;
            newNode.next = afterNode;

            // update next/prev properties of old nodes
            previousNode.next = newNode;
            afterNode.prev = newNode;
        }
        this.length++;
        return this;
    }

    remove(index) {
        // remove from beginning
        //remove from end
        // remove from middle
        if (index === 0) {
            const newHeadNode = this.head.next;
            this.head = newHeadNode;
            newHeadNode.prev = null;
        } else if (index >= this.length - 1) {
            const newTailNode = this.tail.prev;
            this.tail = newTailNode;
            newTailNode.next = null;
        } else {
            const previousNode = this.traverseToIndex(index - 1);
            const afterNode = this.traverseToIndex(index + 1);

            previousNode.next = afterNode;
            afterNode.prev = previousNode;
        }

        this.length--;
        return this;
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

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

}

const dll = new DoublyLinkedList(89);
dll.append(11);
dll.prepend(26);
dll.insert(1, 55);
dll.remove(3);
console.log(dll.printList());
console.log(dll);

