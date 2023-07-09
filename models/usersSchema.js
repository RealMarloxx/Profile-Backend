const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    state: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    }

})

const Users = new mongoose.model("Users", usersSchema)

module.exports = Users
