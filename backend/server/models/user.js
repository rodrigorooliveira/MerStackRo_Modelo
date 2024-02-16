const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users", userSchema);

module.exports = users;