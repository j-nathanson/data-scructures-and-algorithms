// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    let first = 0;
    let second = 1;
    let sum = 0;

    for (let i = 0; i < n + 1; i++) {
        if (i === 0) {
            sum = 0;
        } else if (i === 1) {
            sum = 1;
        } else {
            sum = first + second;
            first = second;
            second = sum;
        }
    }
    return sum;
}
// O(n)
function fibonacciIterative2(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        console.log(arr)
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

console.log(fibonacciIterative(6))
console.log(fibonacciIterative2(6))

// O(2^n)
function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
// O(2^n)
function fibonacciRecursive2(n) {
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(8));