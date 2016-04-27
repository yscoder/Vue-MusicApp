var kuwo = require('../models/kuwo');

exports.search = function(req, res) {

    kuwo.search(req.params).then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};

exports.download = function(req, res) {

    kuwo.download(req.params.id).then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};
