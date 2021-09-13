const express = require('express');
const router = express.Router();
const { getData, body } = require('../controllers/getir');
const {check} = require("express-validator");

//HTTP POST request handle through API and validating request as well before going to controller logics
router.post('/',
    body('startDate').isISO8601().toDate(),
    body('endDate').isISO8601().toDate(),
    body('minCount').isNumeric(),
    body('maxCount').isNumeric(),
    check('endDate').custom((value, { req }) => {
        if(new Date(value) <= new Date(req.body.startDate)) {
            throw new Error ('End date must be valid and after start date');
        }
        return true;
    }),
    check('maxCount').custom((value, { req }) => {
        if(value <= req.body.minCount) {
            throw new Error ('Max Count must be valid and greater than Min Count');
        }
        return true;
    }),
    getData);

module.exports = router;