const mongoose = require('mongoose');
const dataSchema = mongoose.Schema;
const newDataSchema = new dataSchema({}, { strict: false });
//get the data from given collection from Getir
const getDetails = mongoose.model('records', newDataSchema, 'records');
//for request validation
const { body, validationResult } = require('express-validator');

const getData = (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ code:res.statusCode, msg:'Error' , errors: errors.array() });
    }

    //return the result as per given condition which comes under required request
    getDetails.aggregate(
        [
            {$project: { _id: 0, key: '$key', createdAt: '$createdAt', totalCount: { $sum: '$counts' } }},
            {$match: {
                totalCount: { $gt: req.body.minCount, $lt: req.body.maxCount },
                    createdAt: { $gt: req.body.startDate, $lt: req.body.endDate },
                }},
        ],
        (err, getDetails) => {
        if (err) {
            return res.send({ code:res.statusCode, msg:'Error' , errors: err });
        }
        return res.send({ code:res.statusCode, msg:'Success' , records: getDetails } );
    });
}

module.exports = { getData, body };