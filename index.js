

function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(response => {
            // Check if the response is okay
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(posts => {
            console.log("Fetched posts:", posts); // Log the posts
        })
        .catch(error => {
            console.error("Error fetching posts:", error); // Handle errors
        });
}

// Call the function to fetch posts
fetchPosts();