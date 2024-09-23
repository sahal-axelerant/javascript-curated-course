
function showNumbers(limit) {
    let message;
    for (let i = 1; i <= limit; i++) {
        message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

showNumbers(25);