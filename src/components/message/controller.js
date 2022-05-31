const store = require("./store");
const response = require("../../network/response");
const { uploadToCloudinary } = require("./helpers")

const addMessage = async(req, res) => {
    const { url } = await uploadToCloudinary(req.file.path);
    const fullmessage = {
        user: req.body.user,
        message: req.body.message,
        chat: req.body.chat,
        image: url,
        date: new Date()
    }
    console.log(fullmessage);

    await store.addMessage(fullmessage);
    
    if(req.body.message && req.body.user) {
        response.success(req, res, 200, fullmessage);
    }
    else {
        res.status(400).json({
            error: "Faltan datos",
            message: "Introduce los datos necesarios",
            body: null
        })
    }
}

const getMessages = async(req, res) => {
    const user = req.query.user;
    const result = await store.getMessages(user)
    res.status(200).json({
        error: null,
        message: "Procesado correctamente",
        body: result
    })
}

const getMessage = async(req, res) => {
    const result = await store.getMessage(req.params.id);
    res.status(200).json({
        erro: null,
        message: "Procesado Correctamente",
        body: result
    })
}

const updateMessage = async(req, res) => {
    const message = req.body.message;
    const id = req.params.id;
    await store.updateMessage(id, message);
    res.status(200).json({
        error: null,
        message: "Mensaje actualizado",
        body: {
            id,
            message
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
    getMessage,
    updateMessage
}