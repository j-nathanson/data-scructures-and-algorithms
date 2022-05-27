function pal(x) {
    const array = x.toString().split('');

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        if (array[start] !== array[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}


console.log(pal(11))