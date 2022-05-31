const { Router } = require("express");
const controller = require("./controller")

const router = Router();

router.get("/", (req, res) => {
    controller.getMessages(req, res);
})

router.get("/:id", (req, res) => {
    controller.getMessage(req, res);
})

router.post("/", async(req, res) => {
    await controller.addMessage(req, res);
})

router.patch("/:id", (req, res) => {
    controller.updateMessage(req, res);
})

module.exports = router;