function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let bubbleNumber = array[0];

        for (let j = 0; j < array.length; j++) {
            if (bubbleNumber > array[j]) {
                array[j - 1] = array[j];
                array[j] = bubbleNumber;

            } else if (bubbleNumber < array[j]) {
                bubbleNumber = array[j];
            }
        }
    }
    return array;
}


function bubbleSort2(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            console.log(array)
        }
    }
    return array;
}




const array1 = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(bubbleSort(array1))

const array2 = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(bubbleSort2(array2))
