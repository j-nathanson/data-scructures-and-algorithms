//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    let answer = [];
    str = str.split('');

    while (str.length > 0) {
        answer.push(str.pop())
    }
    return answer.join('');
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
    if (str.length === 1) {
        // reached last character
        return str
    } else {
        // substring up to not including the last char
        return str.charAt(str.length - 1) + reverseStringRecursive(str.substring(0, str.length - 1))
    }
}

console.log(reverseString('yoyo mastery'))

