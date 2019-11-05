const express = require('express');
const app = express();
const businessRoutes = express.Router();

//Require the Business model
let Business = require('../models/Business');

//Defined Store Route
businessRoutes.route('/add').post((req, res) => {
    console.log('entrei aqui');
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business in added succsessfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
    console.log('added business')
});

//Defined get data (index or listing) route
businessRoutes.route('/').get( (req, res) => {
    Business.find( (err, businessess) => {
        if(err) {
            console.log(err);
        } else {
            res.json(businessess);
        }
    });
});

//Defined find one business route
businessRoutes.route('/:id').get( (req, res) => {
    console.log('entrei');
    let id = req.params.id;
    Business.findById(id, (err, business) => {
        res.json(business);
    });
});

//Defined update route
businessRoutes.route('/:id').post((req,res)=>{
    Business.findById(req.params.id, (err, nex, business) => {
        if(!business)
            return next(new Error('Could not load Document'));
        else {
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send('unable to update the database');
            });
        }
    });
});

//Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get((req,res) => {
    Business.findByIdAndRemove({_id: req.params.id}, (err, busines) => {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;