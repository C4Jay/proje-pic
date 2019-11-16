const express = require('express');
const app = express();
const tikRoutes = express.Router();

const Tik = require('../m/Tik');

tikRoutes.route('/new').post(function (req, res){
    var tik = new Tik(req.body);
        tik.save()
       .then(tik => {
           res.status(200).json({'tik': 'tik created successfully'});
       })
       .catch(err => {
           res.status(400).send("couldn`t");
       });
});

tikRoutes.route('/').get(function(req, res) {
    Tik.find(function (err, tiks) {
        if(err){
            console.log(err);
        }
        else{
            res.json(tiks);
        }
    });
});

module.exports = tikRoutes