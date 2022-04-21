const Kisaan = require("../models/kisaanModel");
const Fasal = require("../models/fasalModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getHome = (req, res) => {
    Fasal.find({}, (err, fasals) => {
        if (err || !fasals) { res.status(404).send({status: "err", message: "fasal not found/an error occoured"}); console.log("error sent") }
        res.send({status: "ok", fasal: fasals});
        console.log("fasal sent")
    });
}

exports.postRegister = (req, res) => {
    if (req.body.name && req.body.password && req.body.username) {
        // request body contains all required fields
        Kisaan.find({
                username: req.body.username
        }).exec(async function (err, foundUser) {
            if (foundUser.length == 0) {
                // user is unique
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, async function (err, hash) {
                        if (err) {
                            res.status(501).send({ status: "error", message: err });
                        }
                        // Store hash in your password DB.
                        const newKisaan = new Kisaan({
                            username: req.body.username,
                            name: req.body.name,
                            password: hash,
                            queues: []
                        });
                        await newKisaan.save();
                        res.status(200).send({ status: "ok", "message": "Registered succesfully, redirecting..." });
                    });
                });
            } else {
                // user already exists
                res.status(501).send({ status: "error", message: "Username/email already exists." });
            }
        });
    } else {
        // request body doesnt contain all required fields
        console.log(req.body)
        res.status(501).send({ status: "error", message: "Please enter all fields before submitting." });
    }
}

exports.postLogin = (req, res) => {
    if (req.body.username && req.body.password) {
        // request body contains all required fields
        Kisaan.findOne({ username: req.body.username }, (err, foundUser) => {
            if (foundUser) {
                // compare password
                bcrypt.compare(req.body.password, foundUser.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ username: req.body.username }, process.env.TOKEN_SIGN_KEY, { expiresIn: "1h" });
                        res.status(200).send({ status: "ok", message: "Login successful, redirecting...", token, username: foundUser.username });
                    } else if (err) {
                        res.status(501).send({ status: "error", message: "An error occurred." });
                    } else {
                        res.status(200).send({ status: "error", message: "Wrong password. Please try again." });
                    }
                });
            } else {
                // username not found
                res.status(200).send({ status: "error", message: "User not found. Try registering." });
            }
        });
    } else {
        // request body doesnt contain all required fields
        res.status(501).send({ status: "error", message: "Please enter all fields before submitting." });
    }
}