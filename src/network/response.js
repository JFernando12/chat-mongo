
const success = (req, res, status, body) => {
    res.status(status || 200).json({
        error: null,
        message: "Procesado correctamente",
        body: body 
    })
}

module.exports = { success }