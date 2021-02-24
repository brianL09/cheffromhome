const mongoose = require('mongoose');
const { Schema } = mongoose;
const Recipe = require('./Recipe');

const UserSchema = new Schema( {
    email: String,
    username: String,
    password: String,
    recipes:[Object]
});

module.exports = mongoose.model('User', UserSchema);