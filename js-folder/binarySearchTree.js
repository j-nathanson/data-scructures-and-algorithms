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
        }
        return this;
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
    // return target node and previousNode
    lookUpTarget(value) {
        let currentNode = this.root;
        let previousNode = null;
        let direction = '';

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return {
                    target: currentNode,
                    targetPredecessor: previousNode,
                    direction
                }
            }
            //update previousNode
            previousNode = currentNode;

            // less than, move to left node
            if (value < currentNode.value) {
                direction = 'left';
                currentNode = currentNode.left;
                // more than, move to right node
            } else {
                direction = 'right';
                currentNode = currentNode.right;
            }
        }
        // did not find
        return null;
    }
    remove(value) {
        const lookup = this.lookUpTarget(value);

        if (!lookup) {
            return 'not found';
        }
        let { target, targetPredecessor, direction } = lookup;

        // target has no children
        if (!target.left && !target.right) {
            // make root target null
            if (target === this.root) {
                this.root = null;
            } else {
                targetPredecessor[direction] = null;
            }
            return this;
        }

        // target only has one left direction child
        if (target.left && !target.right) {
            // update root
            if (target === this.root) {
                this.root = target.left;
            } else {
                targetPredecessor[direction] = target.left;
            }
        }
        // target only has one right direction child
        else if (!target.left && target.right) {
            // update root
            if (target === this.root) {
                this.root = target.right;
            } else {
                targetPredecessor[direction] = target.right;
            }
        }
        // target has 2 children
        else {
            let successor = target.right;
            let parentSuccessor = successor;

            // while not on the last left most node
            while (successor.left) {
                parentSuccessor = successor;
                successor = successor.left;
            }

            // remove successor and child from the tree
            if (successor.right) {
                parentSuccessor.left = successor.right;
                successor.right = null;
            } else {
                parentSuccessor.left = null;
            }

            // grab left side of the target
            const leftSide = target.left;
            // assign to successor
            successor.left = leftSide;

            // check if root
            if (target === this.root) {
                this.root = successor;
            } else {
                // grab right side of target and assign to successor
                const rightSide = target.right;
                successor.right = rightSide;
                targetPredecessor[direction] = successor;
            }
        }
        return this;
    }
}

const tree = new BinarySearchTree();
tree.insert(25)
tree.insert(1)
tree.insert(50)
// console.log(tree.remove(25))
tree.insert(26)
tree.insert(51)
// tree.insert(51)
// tree.remove(25)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// tree.remove(9)
// console.log(tree)

// ZTM solution
class BinarySearchTree2 {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    // if currentNode.left equals null then insert here
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup(value) {
        // if root is null
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
                // do a second else if so we do not always return a node
            } else if (currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }


    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null; //previous reference to parent

        // search for node based on value
        while (currentNode) {
            if (value < currentNode.value) {
                // update parent node basied on direction
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work! parent node is set

                //Option 1: No right child: 
                //    9
                // 5
                if (currentNode.right === null) {
                    // if parent node is still null then we are at the root
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }


}


// console.log(tree.lookup(15))
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