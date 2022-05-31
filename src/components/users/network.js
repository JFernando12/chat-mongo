const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/", (req, res) => {
    controller.addUser(req, res);
})

router.get("/", (req, res) => {
    controller.getUsers(req, res);
})

router.delete("/:id", (req, res) => {
    controller.deleteUser(req, res);
})

module.exports = router;