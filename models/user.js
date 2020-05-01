const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        // unique: true
    },
    password: {
        type: String,
        require: true
    },
    confirm_password: {
        type: String,
        require: true
    },
    img:{
         data: Buffer,
         contentType: String 
    }
}, {
    timestamps: true
})

const User = mongoose.model("users", userSchema);
module.exports = User;