var music = require('../controllers/music');
var path = require('path');

module.exports = function(app) {

    app.get('/search/:key/:pn', music.search);

    app.get('/song/:id', music.download);

};
