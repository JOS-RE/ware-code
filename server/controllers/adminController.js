const Kisaan = require("../models/kisaanModel")
const Fasal = require("../models/fasalModel");

exports.getAdmin = (req, res) => {
    var adminData = []
    Fasal.find({}, (err, allFasals) => {
        if (err || !allFasals) { res.send({ status: "err", message: "An error occurred" }) }
        res.send({
            status: "ok",
            adminData: allFasals
        })
    });
}

exports.putUpdate = (req, res) => {
    if (req.body.availableCapacity > req.body.totalCapacity || req.body.currentPrice < req.body.msp) { res.send({ status: "err", message: "an error occurred" }) } else {
        Fasal.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            if (err || !data) { res.send({ status: "err", message: "an error occurred" }) }
            console.log(data);
            res.send({ status: "ok", message: "Fasal updated!" })
        });
    }
}

exports.postNewCrop = async (req, res) => {
    // if (req.body.availableCapacity > req.body.totalCapacity || req.body.currentPrice < req.body.msp) { res.send({ status: "err", message: "an error occurred" }) } else {
    const newCrop = new Fasal(req.body);
    await newCrop.save((result) => {
        console.log(result)
    });
    res.send({ status: "ok", message: "New crop added!" })
    // }
}

exports.postShortenQueue = (req, res) => {
    Fasal.findOne({ _id: req.body.fasalId }, (err, fasal) => {
        if (err || !fasal) { res.send({ status: "err", message: "an error occurred" }) }
        if (fasal.queue.length > 0){
            Kisaan.findOne({ _id: fasal.queue[0] }, async (err, kisaan) => {
                if (err || !kisaan) { res.send({ status: "err", message: "an error occurred" }) }
                const index = kisaan.queues.indexOf(req.body.fasalId);
                if (index > -1) {
                    fasal.queue.shift();
                    kisaan.queues.splice(index, 1);
                    await fasal.save();
                    await kisaan.save();
                    res.send({ status: "ok", "message": `Removed ${kisaan.name} from queue` })
                } else {
                    if (err || !kisaan) { res.send({ status: "err", message: "Fasal id not found in Kisaan's queue" }) }
                }
            })
        } else {
            res.send({ status: "err", message: "an error occurred" })
        }
    })
}