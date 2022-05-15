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

    insert(index, value) {

    }
}

const dll = new DoublyLinkedList(5);
console.log(dll.append(9));
console.log(dll.append(88));
  // console.log(dd.prepend(0));
