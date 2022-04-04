const { Post } = require('../models');

const postData = [
    {
        "title": "My First Blog Post",
        "post_text": "This is my first blog post. What a wonderful blog I will write!",
        "user_id": 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;