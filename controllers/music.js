var music = require('../models/music');

exports.index = function(req, res) {

    res.render('index', music.index());

};

exports.search = function(req, res) {

    var params = req.params;

    music.search(params.key, params.pn).then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};

exports.download = function(req, res) {

    music.download(req.params.id).then(function (data) {
        res.redirect(data);
    }, function (e) {
        console.log(e);
    });

};
