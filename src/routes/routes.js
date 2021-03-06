const express = require("express");
const router = express.Router();
//const db= require("../models");
const meetingController = require("../controller/meeting");
const {check, validationResult} = require('express-validator/check');



router.get('/meetings', meetingController.getAll);

router.post('/meetings',[
    check('name').not().isEmpty(),
    check('email').isEmail(),
    check('phno').not().isEmpty().isLength({min: 10,max: 10}),
    check('start_date').not().isEmpty()
],meetingController.createNew);

module.exports=router;


/*router.get('/meetings', (req,res) => {
    //db.Patient.findAll().then(users => res.send(users));
    db.meeting_with_doc.findAll().then(users => res.send({
        "success": true,
        "message": "Successful fetch",
        "data": [users]
    }));
})

router.post('/meetings', (req,res) => {
    db.meeting_with_doc.create({
        doc_id:req.body.doc_id,
        name:req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        start_date:req.body.start_date,
        end_date:req.body.end_date
    }).then(users => res.send({
        "success": true,
        "message": "New meeting created successfuly!",
        "data": []
    }));
});*/