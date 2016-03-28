var request = require('../lib/request');
var api = require('../lib/api').kuwo;

exports.search = function(params) {

    var key = params.key,
        pn = params.pn;

    return request(api.searchUrl + '?type=music')
        .get(params)
        .then(function(body) {
            return api.parse(body, key, pn);
        });
};

exports.download = function(id) {

    return request(api.songUrl)
        .get({
            rid: 'MUSIC_' + id
        })
        .then(function(body) {
            return body;
        });
};
