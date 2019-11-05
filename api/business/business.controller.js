'use strict'

const business = require('./business.model');

exports.list = (req, res) => {
    business.find((err, businessess) => {
        if (err) {
            console.log(err);
        } else {
            res.json(businessess);
        }
    });
};

exports.listOne = (req, res) => {
    let id = req.params.id;
    business.findById(id, (err, business) => {
        if (err) {
            console.log(err);
        } else {
            res.json(business)
        }
    });
};

exports.create = (req, res) => {
    let business = new Business(req.body);
    business.save().then(business => {
        res.status(200).json({ 'business': 'business in added succsessfully' });
    }).catch(err => {
        res.status(400).send("unable to save to database");
    });
}

exports.update = (req, res) => {
    let id = req.params.id;
    business.findById(id, (err, next, business) => {
        if(!business)
            return next(new Error('Could not load Document'));
        else {
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update complete')
            }).catch(err => {
                res.status(400).send('unable to update the database');
            });
        }
    });
};

exports.remove = (req, res) => {
    let id = req.params.id;
    business.findByIdAndRemove(id, (err, business) => {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
};

module.exports = businessRoutes;