
// Create a blog post object that has the properties
// title, body, author, views(number), comments (author, body), isLive(boolean).

function Blog(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

const blog = new Blog("Blog title","Blog body hsbfjbdjfh","Blog Author");


console.log(blog);