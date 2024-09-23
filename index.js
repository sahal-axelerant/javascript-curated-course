
function sum(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Log sum of multiples of 3 and 5 from 1 ... 10.
console.log(sum(10));