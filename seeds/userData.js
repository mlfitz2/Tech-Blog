const { User } = require('../models');

const userData = [
    {
        "name": "Mac",
        "password": "password"
    },
    {
        "name": "Dennis",
        "password": "password"
    },
    {
        "name": "Charlie",
        "password": "password"
    },
    {
        "name": "Dee",
        "password": "password"
    },
    {
        "name": "Frank",
        "password": "password"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;