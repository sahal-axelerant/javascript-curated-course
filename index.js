
let users_data = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        users_data = users; // Store for later use.
        return renderUsersList(users);
    });

function renderUsersList(users) {
    setTimeout(function(){
        let ol = document.getElementById("users_list");
        users.forEach(function(user) {
            let li = document.createElement("li");
            let button = document.createElement("button");
            
            li.innerText = user.name;
            li.id = user.id;
            button.innerText = "Show details";
            button.id = `details-${user.id}`;
            button.onclick = function( e ) {
                renderDetails(e, user);
            }
            li.appendChild(button);
            ol.appendChild(li);
        });
    }, 1000);
}

function renderDetails(e, user) {
    let address = stringify(user.address);
    let company = stringify(user.company);
    let element = document.getElementById("user_data_wrapper");
    element.innerHTML = 'Fetching user data...';
    let posts_wrapper = document.getElementById("user_posts_wrapper");
    posts_wrapper.innerHTML = '';
    setTimeout(function(){
        element.innerHTML = `
        <h1>${user.name}</h1>
        <div>${user.email}</div>
        <div>${user.phone}</div>
        <a href="https://${user.website}" target="_blank">${user.website}</a>
        <div><h3>Address</h3>${address}</div>
        <div><h3>Company Details</h3>${company}</div>
        `;
    
        posts_wrapper.innerHTML = '<h3>Posts</h3>Fetching posts...';
        // fetch posts.
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
        .then(response => {
            return response.json();
        })
        .then(posts => {
            return renderUserPosts(posts_wrapper, posts);
        });
    }, 2000);
}

function renderUserPosts(element, posts) {
    setTimeout(function(){
        element. innerHTML = '';
        let h3 = document.createElement("h3");
        h3.innerText = "Posts";
        element.appendChild(h3);
        let ul = document.createElement("ul");
        posts.forEach(function(post) {
            let li = document.createElement("li");
            
            li.innerText = post.title;
            li.id = post.id;
            ul.appendChild(li);
        });
        element.appendChild(ul);
    }, 3000);
}

function stringify(obj) {
    let string = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            string += `${key}: ${obj[key]}</br>`;
        }
    }
    return string;
}