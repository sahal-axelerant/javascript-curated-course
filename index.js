
function getUser(userId) {
    return fetch('https://jsonplaceholder.typicode.com/users/' + userId);
}

function getPosts(userId) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + userId);
}

const promise =  getUser(1);
promise
    .then(result => { // Response obj
        return result.json();
    })
    .then(user => {
        console.log("User fetched:", user); // user data fetched from api
        return getPosts(user.id)
    })
    .then(result => { // Response obj
        return result.json();
    })
    .then(post => {// user posts data fetched from api
        console.log("Post fetched:", post);
    })
