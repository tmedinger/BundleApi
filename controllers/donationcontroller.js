var express = require('express')
var router = express.Router()
var Donation = require('../services/donationServices');

//get all donations
router.get("/donation", function(req, res) {
    Donation
    .getAll() 
});

//create donation
router.post('/api/createdonation', validate-session, function (req, res) {
    Donation.createDonation(req)
   
});

//edit donation
router.put(`/api/donationEdit/:id`, validate-session, function(req, res) {
        var data = req.params.id;
        Donation.editDonation(req, data)

            
    });

//get one donation
router.get(`/api/getDonation/:id`, validate-session, function(req, res) {
        var id = req.params.id;
        Donation.getOneDonation(req, id)      
    });

router.delete(`/api/deleteDonation/:id`, validate-session, function(req, res) {
    var id = req.params.id;
    Donation.deleteDonation(req, id)      
});

module.exports = router;