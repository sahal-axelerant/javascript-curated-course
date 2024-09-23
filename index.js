
function arrayFromRange(min, max) {
    let output = [];
    for (let number = min; number <= max; number++) {
        output.push(number);
    }
    return output;
}

console.log(arrayFromRange(-3, 3));