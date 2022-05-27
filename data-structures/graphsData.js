//Edge List
// array states the connection
const graph = [[0, 2], [2, 3][2, 1], [1, 3]];

// Adjacent List
// index is the node, value is nodes neighbors/connections. arrays, objects or linked list
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix

// index  is the node
// value is binary whether or not connected to other index nodes, including itself

const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];
// can use objects
const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
};