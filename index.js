
const array = [1, 3, 5, 7, 9, 0];

console.log("Array:", array);
console.log(1, includes(array, 1));
console.log(2, includes(array, 2));
console.log(10, includes(array, 10));
console.log(0, includes(array, 0));

function includes(array, search) {
    for (const iterator of array) {
        if (iterator === search) return true;
    }
    return false;
}