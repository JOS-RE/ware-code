const Kisaan = require("../models/kisaanModel")
const Fasal = require("../models/fasalModel");

exports.getDashboardData = (req, res) => {
    console.log("kisaan id " + req.body.kisaanId)
    Fasal.find({}, (err, allFasals) => {
        if (err || !allFasals) { res.send({ status: "err", message: "No fasals found/An error occurred" }) }
        // console.log(allFasals);
        const finalData = allFasals;
        allFasals.map((fasal, index) => {
            if (fasal.queue.includes(req.body.kisaanId)) {
                finalData[index] = { ...finalData[index], inQueue: true, queueNumber: fasal.queue.indexOf(req.body.kisaanId) + 1 }
            } else {
                finalData[index] = { ...finalData[index], inQueue: false }
            }
        })
        console.log(finalData);
        res.send({ status: "ok", dashboardData: finalData });
    })
}

exports.postQueue = (req, res) => {
    Fasal.findOne({ _id: req.body.cropId }, (err, fasal) => {
        Kisaan.findOne({ _id: req.body.kisaanId }, async (err, kisaan) => {
            if (err || !fasal || !kisaan) { res.send({ status: "err", "message": "Queueing failed/An error occurred" }) }
            fasal.queue.push(req.body.kisaanId);
            kisaan.queues.push(req.body.cropId);
            await fasal.save();
            await kisaan.save();
            res.send({ status: "ok", "message": "Queued!" })
        });
    });
}

exports.postRetract = (req, res) => {
    Fasal.findOne({ _id: req.body.cropId }, (err, fasal) => {
        Kisaan.findOne({ _id: req.body.kisaanId }, async (err, kisaan) => {
            if (err || !fasal || !kisaan) { res.send({ status: "err", "message": "Queueing failed/An error occurred" }) }
            const indexOne = fasal.queue.indexOf(req.body.kisaanId);
            const indexTwo = kisaan.queues.indexOf(req.body.cropId);
            if (indexOne > -1) {
                if (indexTwo > -1) {
                    fasal.queue.splice(indexOne, 1);
                    kisaan.queues.splice(indexTwo, 1);
                    await fasal.save();
                    await kisaan.save();
                    res.send({ status: "ok", "message": "Queued!" })
                } else {
                    res.send({ status: "err", "message": "An error occurred" });
                }
            } else {
                res.send({ status: "err", "message": "An error occurred" });
            }
        });
    });
}