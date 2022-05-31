const Model = require("./model");
const mongoose = require("mongoose");

const uri = "mongodb+srv://jfernando12:Mexicana2012.@cluster0.o5yrq.mongodb.net/?retryWrites=true&w=majority";

console.log("Conectada con exito")

mongoose.connect(uri)

const addUser = async(user) => {
    const myuser = new Model(user);
    myuser.save();
}

const getUsers = async() => {
    const users = await Model.find();
    return users;
}

const deleteUser = async(id) => {
    await Model.findByIdAndDelete(id);
}

module.exports = {
    addUser,
    getUsers,
    deleteUser
}