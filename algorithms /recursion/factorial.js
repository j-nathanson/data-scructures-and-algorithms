// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// stop case 2 to skip a step
// O(n)
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1)
}

// O(n)
function findFactorialIterative(number) {
    let answer = 2;

    for (let i = number; i > 2; i--) {
        answer *= i;
    }

    return answer;
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))