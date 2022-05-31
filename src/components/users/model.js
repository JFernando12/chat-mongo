const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String
})

const Model = mongoose.model("Users", mySchema);

module.exports = Model;