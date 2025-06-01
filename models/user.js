const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
    }
});

userSchema.plugin(passportLocalMongoose); // these line automatically implement username,pass, hashing, salting, for you.
module.exports = mongoose.model('User', userSchema);
