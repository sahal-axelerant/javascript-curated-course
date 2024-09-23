
const numbers = [1, 2, 3, 4, 1, 1, 1, 1];
const output = countOcuurences(numbers, 1);
const output1 = countOcuurencesWithReduce(numbers, 1);
console.log(output);
console.log(output1);


function countOcuurences(array, search) {
    let count = 0;
    for (const value of array) {
        if (value === search) count++
    }
    return count;
}

function countOcuurencesWithReduce(array, search) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === search) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}