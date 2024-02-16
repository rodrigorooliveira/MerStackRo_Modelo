const mongoose = require("mongoose");
const dbUser = ''
const dbPassword = ''

const conn = async () => {
    try {
      const dbConn = await mongoose.connect('mongodb://127.0.0.1:27017/Escola');
      
      console.log("Conectou ao Banco!");
      return dbConn
    } catch (error) {
        console.log(error);
    }
};

conn()

module.exports = conn;