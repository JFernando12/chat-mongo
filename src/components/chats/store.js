const Model = require("./model");
const mongoose = require("mongoose")

const uri = "mongodb+srv://jfernando12:Mexicana2012.@cluster0.o5yrq.mongodb.net/?retryWrites=true&w=majority";
console.log("Conectada con exito")
mongoose.connect(uri)

const addChat = async(users) => {
    const chat = {
        users
    }
    console.log(chat);
    const allUsers = new Model(chat);
    await allUsers.save();
}

const getChats = async() => {
    const result = await Model.find().populate("users").exec();
    return result;
}

const getChat = async(id) => {
    const result = await Model.findById(id).populate("users");
    return result;
}

module.exports = {
    addChat,
    getChats,
    getChat
}