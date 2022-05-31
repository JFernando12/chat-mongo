const store = require("./store");

const addUser = async(req, res) => {
    console.log(req.file)
    const user = {
        name: req.body.name
    };
    await store.addUser(user);
    res.status(201).json({
        error: null,
        message: "Usuario creado",
        body: user
    })
}

const getUsers = async(req, res) => {
    const users = await store.getUsers();
    res.status(200).json({
        error: null,
        message: "Procesado correctamente",
        body: users
    })
}

const deleteUser = async(req, res) => {
    await store.deleteUser(req.params.id);
    res.status(200).json({
        error: null,
        message: "Eliminado Correctamente",
        body: req.params.id
    })
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
}