
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 2);
console.log(output);


function move(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) {
        console.error("Invalid offset")
    }
    else {
        const output = [...array];
        let element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;
    }
}