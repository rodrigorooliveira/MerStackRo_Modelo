require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./db/conn");

const users = require("./models/user");
const cors = require("cors");
const router = require("./routers/router");

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`O Servidor está rondando na porta ${port}`);
});