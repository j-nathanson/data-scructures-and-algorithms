const numbers = [3, 44, 3, 2, 99, 1, 78];

function mergeSort(array) {
    // base case: return single item array
    if (array.length === 1) {
        return array
    }

    // if array length is larger than 2 find middle index
    const middle = Math.floor(array.length / 2);


    // split into two arrays, left will have smaller length if original array is odd
    const left = array.slice(0, middle); // from 0 index up unil middle index
    const right = array.slice(middle); // from the middle index to the end of the array

    // attempt to sort the left and right arrays
    // will call itself recursively until the base case is reached
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

// will return a sorted array from already sorted arrays
// if array length is 1 then array is already sorted
function merge(left, right) {
    let arr = [];

    // only loop if arrays aren't empty
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else if (left[0] > right[0]) {
            arr.push(right.shift());
        } else {
            arr.push(left.shift());
            arr.push(right.shift());
        }
    }


    // copy any leftover values into the new array since they are already sorted
    return [...arr, ...left, ...right]

}


const answer = mergeSort(numbers);
console.log(answer);



const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort2(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    // console.log('left:', left);
    // console.log('right:', right);


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
        rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // console.log(left, right)
    // since index increases slice will be empty if length reaches the index
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer2 = mergeSort2(numbers);
console.log(answer2);