// Get all movies in 2024 with rating greater than 4.
// Sort them by rating in descending order.
// Show only their title.

const movies = [
    { title: 'a', year: 2024, rating: 4.5 },
    { title: 'b', year: 2024, rating: 3.5 },
    { title: 'c', year: 2024, rating: 4.8 },
    { title: 'd', year: 2020, rating: 4.4 }
];

const titles = movies
    .filter(m => m.year === 2024 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(titles);