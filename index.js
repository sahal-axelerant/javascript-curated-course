
showPrimes(30);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}