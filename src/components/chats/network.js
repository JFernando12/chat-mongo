const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post("/", (req, res) => {
    controller.addChat(req, res);
});

router.get("/", (req, res) => {
    controller.getChats(req, res);
})

router.get("/:id", (req, res) => {
    controller.getChat(req, res);
})

module.exports = router;