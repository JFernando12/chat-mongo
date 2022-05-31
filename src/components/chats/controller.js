const res = require("express/lib/response");
const store = require("./store");

const addChat = async(req, res) => {
    const users = req.body.users;
    await store.addChat(users);
    res.status(201).json({
        error: null,
        message: "Creado correctamente",
        body: users
    })
}

const getChats = async(req, res) => {
    const result = await store.getChats();
    res.status(200).json({
        error: null,
        message: "Procesado correctamente",
        body: result
    })
}

const getChat = async(req, res) => {
    const result = await store.getChat(req.params.id);
    res.status(200).json({
        error: null,
        message: "Procesado correctamente",
        body: result
    })
}

module.exports = {
    addChat,
    getChats,
    getChat
}