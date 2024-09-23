// Divisible by 3 => return Fizz
// Divisible by 5 => return Buzz
// Divisible by both 3 and 5 => return FizzBuzz
// Not divisible by both 3 and 5 => return number passed
// Any value passed to the function which is not a number should return 'Not a Number' string.

// A function to log fizzbuzz
function fizzBuzz(number) {
    if (typeof number !== 'number') {
        console.log("Not a number")
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0) {
        console.log("Fizz");
    }
    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }
}

let a = 15;
fizzBuzz(a);