const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestNum = array[i];
        let smallestIndex = i;

        for (let j = i; j < array.length; j++) {
            if (array[j] < smallestNum) {
                smallestNum = array[j];
                smallestIndex = j;
            }
        }

        let temp = array[i];
        array[i] = smallestNum;
        array[smallestIndex] = temp;

    }

    return array
}

console.log(selectionSort(numbers))


const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort2(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers2);
console.log(numbers2);