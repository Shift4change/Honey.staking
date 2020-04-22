const mongoose = require('mongoose');
const db = require('../models');
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://Paul:123456A@ds135797.mlab.com:35797/heroku_rhsl61z5"
    );

const exampleUser = [
    {
        first_name: "Bob",
        last_name: "Dylan",
        email: "bobdylan@bobdylan.com",
        password: "12345678",
        // date: new Date(Date.now())
    }
]

module.exports = exampleUser;
