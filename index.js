
showStars(10);

function showStars(rows) {
    let stars = '';
    for (let index = 1; index <= rows; index++) {
        for (let inner_index = 1; inner_index <= index; inner_index++) {
            stars += '*';
        }
        stars += "\n";
    }
    console.log(stars);
}