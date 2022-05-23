class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {

        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            let previousNode = this.root;
            let lastDirection = '';

            while (currentNode !== null) {
                // move previous Node down a level
                previousNode = currentNode;
                // cannot add duplicate values
                if (value === currentNode.value) {
                    return this;
                    // less than, move to left node
                } else if (value < currentNode.value) {
                    currentNode = currentNode.left;
                    lastDirection = 'left';
                    // more than, move to right node
                } else {
                    currentNode = currentNode.right;
                    lastDirection = 'right';
                }
            }

            previousNode[lastDirection] = newNode;
            return this;

        }
    }
    lookup(value) {
        let currentNode = this.root;

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return currentNode;
            }
            // less than, move to left node
            if (value < currentNode.value) {
                currentNode = currentNode.left;
                // more than, move to right node
            } else {
                currentNode = currentNode.right;
            }
        }
        // did not find
        return null;
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree)

console.log(tree.lookup(15))
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

// function traverse(node) {
//     const tree = { value: node.value };
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
// }