const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//MiddleWares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"))

//Multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, "public/uploads"),
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
})

app.use(multer({ storage:storage }).single("image"));


//Routes
app.use("/messages", require("./components/message/network"));
app.use("/users", require("./components/users/network"));
app.use("/chats", require("./components/chats/network"));

app.listen(3000, () => {
    console.log("Server on port 3000")
})
