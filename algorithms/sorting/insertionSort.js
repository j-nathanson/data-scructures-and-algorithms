const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [7, 4, 5, 2, 6];

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {

            let j = i;
            while (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                j--;
            }
        }
    }
    return array;
}

insertionSort(numbers);
console.log(numbers);

insertionSort(numbers2);
console.log(numbers2);

const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort2(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
}

insertionSort2(numbers3);
console.log(numbers3);

//good for nearly sorted items