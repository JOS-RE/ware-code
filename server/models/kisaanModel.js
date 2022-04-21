const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
const kisaanSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    queues: [String]
});

const Kisaan = mongoose.model("Kisaan", kisaanSchema);

module.exports = Kisaan;