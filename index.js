
function showProperties(obj) {
    for (let i in obj) {
        if (typeof obj[i] === 'string')
            console.log(i, obj[i]);
    }
}

const movie = {
    title: 'My movie',
    year: 2024,
    director: 'Sahal'
};
showProperties(movie);