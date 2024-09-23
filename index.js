// Get all movies in 2024 with rating greater than 4.
// Sort them by rating in descending order.
// Show only their title.

const movies = true;

try {
    const titles = getMovies(movies);
    console.log(titles);
}
catch (e) {
    console.log(e.message);
}

function getMovies(movies) {
    if (!Array.isArray(movies)) throw new Error("Invalid movie array");
    return movies
        .filter(m => m.year === 2024 && m.rating >= 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);
}