const mongoose = require("mongoose")
const Schema = mongoose.Schema

const usersSchema = new Schema()

module.exports = Users = mongoose.model('users', usersSchema)