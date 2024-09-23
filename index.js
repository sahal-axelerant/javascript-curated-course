
const numbers = [1, 2, 3, 4, 10, 15, 1, 1];
const output = getMax(numbers);
const output1 = getMaxWithReduce(numbers);
console.log(output);
console.log(output1);


function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (const value of array) {
        if (value > max) max = value;
    }
    return max;
}

function getMaxWithReduce(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}