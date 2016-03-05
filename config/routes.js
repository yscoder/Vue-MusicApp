var music = require('../controllers/music');

module.exports = function(app) {

    app.get('/', music.index);

    app.get('/search/:key/:pn', music.search);

    app.get('/download/:id', music.download);

};
