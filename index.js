
function getUser(userId) {
    const user = fetch('https://jsonplaceholder.typicode.com/todos/' + userId)
    .then(response =>  response.json());
    return user;
}

const user = getUser(1);
console.log("Fetched user:", user);