const mongoose = require("mongoose");
const Model = require("./model")

const uri = "mongodb+srv://jfernando12:Mexicana2012.@cluster0.o5yrq.mongodb.net/?retryWrites=true&w=majority";
console.log("Conectada con exito")
mongoose.connect(uri)


const addMessage = async(message) => {
    const myMessage = new Model(message);
    await myMessage.save()
}

const getMessages = async(user) => {
    const filter = {};
    if (user) {
        filter.user = user;
    }

    const result = await Model.find(filter).populate("user").exec();
    return result;
}

const getMessage = async(id) => {
    const result = await Model.findById(id);
    return result;
}

const updateMessage = async(id, message) => {
    const newMessage = await Model.findById(id);
    newMessage.message = message;
    await newMessage.save();
}

module.exports = {
    addMessage,
    getMessages,
    getMessage,
    updateMessage,
}