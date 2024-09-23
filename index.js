// Count the number of truthy values in an array.
function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        // If value is truthy, condition returns true and increase count.
        if (value) {
            count += 1;
        }
    }
    return count;
}

const values = [1, '', 2, undefined, {name: 'Sahal'}, NaN, '1', true, 'Axelerant', 1000];
console.log(countTruthy(values));