const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const fasalSchema = new mongoose.Schema({
    cropName: String,
    msp: Number,
    currentPrice: Number,
    totalCapacity: Number,
    availableCapacity: Number,
    queue: [String]
});

const Fasal = mongoose.model("Fasal", fasalSchema);
module.exports = Fasal;