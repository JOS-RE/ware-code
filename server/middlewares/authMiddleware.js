const jwt = require("jsonwebtoken");
const Kisaan = require("../models/kisaanModel");

exports.authMiddleware = (req, res, next) => {
    console.log(`authorizing @${req.headers["username"]} with middleware...`)
    const token = req.headers["x-access-token"];
    jwt.verify(token, process.env.TOKEN_SIGN_KEY, (err, decoded) => {
        if (decoded) {
            Kisaan.findOne({ username: decoded.username }, (err, foundUser) => {
                if (foundUser.username === req.headers["username"]) {
                    console.log("middleware auth successful!")
                    req.body.kisaanId = foundUser._id.toString();
                    next();
                } else {
                    res.status(501).send({ status: 'error', message: "JWT is invalid. Please log in again. Redirecting..." });
                }
            });
        } else if (err) {
            res.status(501).send({ status: 'error', message: "An error occurred while verifying JWT. Please log in again. Redirecting..." });
        } else {
            res.status(501).send({ status: "error", message: "JWT is invalid. Please log in again. Redirecting..." });
        }
    })
}